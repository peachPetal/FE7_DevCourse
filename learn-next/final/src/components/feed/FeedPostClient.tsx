// 💡 새 파일: src/components/feed/FeedPostClient.tsx

"use client";

import { FeedItem } from "@/types";
import { format } from "date-fns";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function FeedPostClient({ item }: { item: FeedItem }) {
  // 💡 PostClient.tsx의 스타일을 모방
  return (
    <div className="max-w-3xl mx-auto">
      <article className="space-y-8">
        {/* 헤더 (PostClient.tsx 스타일) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {item.categories?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-light tracking-tight leading-tight">
            {item.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Google Gemini Blog</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{format(new Date(item.pubDate), "yyyy.MM.dd")}</span>
              </div>
            </div>
            {/* 원본 링크 버튼 */}
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-colors text-sm"
            >
              원본 보기
            </Link>
          </div>
        </div>

        {/* 본문 영역 */}
        <div className="border-t border-gray-800 pt-8">
          {/* 💡 [핵심] 
            Google RSS의 본문(item.content)은 HTML입니다.
            PostClient.tsx처럼 Markdown 파싱을 할 수 없습니다.
            'dangerouslySetInnerHTML'을 사용해 HTML을 그대로 렌더링해야 합니다.
            'prose prose-invert'를 사용해 Google의 CSS 대신 기본 스타일을 적용합니다.
          */}
          <div
            className="prose prose-invert prose-sm max-w-none text-gray-300"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </article>

      {/* 💡 참고: 
        이 페이지는 Supabase DB의 'posts' 레코드가 아니므로,
        PostClient.tsx의 댓글 기능은 여기서는 작동하지 않습니다.
      */}
    </div>
  );
}