// src/components/feed/GeminiProductFeed.tsx

import { Rss } from "lucide-react";
// 💡 [수정] 헬퍼 파일에서 함수 import
import { getGeminiProductFeed } from "@/utils/helper/server";
// 💡 클라이언트 리스트 컴포넌트 import
import FeedItemList from "./FeedItemList";

const ITEMS_PER_PAGE = 5;
const RSS_FEED_URL = "https://blog.google/products/gemini/rss/"; // 헤더 링크용

/**
 * Gemini 공식 피드를 렌더링하는 서버 컴포넌트 (UI 껍데기)
 */
export default async function GeminiProductFeed() {
  const allItems = await getGeminiProductFeed(); // 헬퍼 함수 호출
  const initialItems = allItems.slice(0, ITEMS_PER_PAGE);
  const totalItems = allItems.length;

  if (totalItems === 0) {
    return (
      <p className="text-gray-500">
        Google Gemini 공식 피드를 불러올 수 없습니다.
      </p>
    );
  }

  return (
    <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-light">Gemini 공식 블로그</h2>
        <a
          href={RSS_FEED_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="View RSS Feed"
        >
          <Rss size={18} className="text-gray-500 hover:text-white" />
        </a>
      </div>

      {/* 💡 클라이언트 컴포넌트에 props 전달 */}
      <FeedItemList initialItems={initialItems} totalItems={totalItems} />
    </div>
  );
}