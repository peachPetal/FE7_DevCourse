// src/components/feed/FeedItemList.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FeedItem } from "@/utils/helper"; // 💡 [수정] 헬퍼 파일에서 타입 import
import { getMoreFeedItems } from "@/utils/actions"; // 서버 액션 import
import Link from "next/link";
import { Tag } from "lucide-react";
import { format } from "date-fns";

const ITEMS_PER_PAGE = 5;

type FeedItemListProps = {
  initialItems: FeedItem[];
  totalItems: number;
};

export default function FeedItemList({
  initialItems,
  totalItems,
}: FeedItemListProps) {
  const [items, setItems] = useState(initialItems);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(totalItems > initialItems.length);

  const triggerRef = useRef<HTMLLIElement>(null);

  const renderItem = (item: FeedItem) => {
    // 💡 Buffer 사용 (Node.js API이므로 클라이언트 컴포넌트에서도 사용 가능)
const safeGuid = btoa(item.guid) // 1. 표준 Base64 인코딩 (btoa)
      .replace(/\+/g, "-") // 2. '+'를 '-'로 변경
      .replace(/\//g, "_") // 3. '/'를 '_'로 변경
      .replace(/=+$/, ""); // 4. 패딩(=) 제거

    return (
      <li
        key={item.guid}
        className="border-b border-gray-800 pb-3 last:border-b-0"
      >
        <Link
          href={`/feed/${safeGuid}`}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item.title}
        </Link>

        {item.contentSnippet && (
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {item.contentSnippet.slice(0, 150)}...
          </p>
        )}

        <div className="flex items-center gap-2 mt-3">
          <Tag size={14} className="text-gray-600" />
          <div className="flex gap-2 flex-wrap">
            {item.categories?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          {format(new Date(item.pubDate), "yyyy.MM.dd")}
        </p>
      </li>
    );
  };

  const loadMoreItems = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const newItems = await getMoreFeedItems(page); // 서버 액션 호출

    if (newItems.length > 0) {
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
      setHasMore(items.length + newItems.length < totalItems);
    } else {
      setHasMore(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 }
    );

    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, hasMore, page]);

  return (
    <ul className="space-y-4">
      {items.map(renderItem)}

      {hasMore && (
        <li
          ref={triggerRef}
          className="text-center text-gray-500 py-4"
        >
          {isLoading ? "Loading..." : "Load more"}
        </li>
      )}
    </ul>
  );
}