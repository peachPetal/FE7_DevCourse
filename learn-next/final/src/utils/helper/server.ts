// 💡 새 파일: src/utils/helper/server.ts
"use server"; // 👈 서버 전용 파일임을 명시

import Parser from "rss-parser";
import translate from "@iamtraction/google-translate";
import { FeedItem } from "@/types"; // 💡 1. types/index.d.ts 에서 타입 가져오기

const RSS_FEED_URL = "https://blog.google/products/gemini/rss/";

export async function getGeminiProductFeed(): Promise<FeedItem[]> {
  try {
    const response = await fetch(RSS_FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }

    const xmlText = await response.text();

    const parser = new Parser<Record<string, never>, FeedItem>({
      customFields: {
        item: [["content:encoded", "content"]], // 👈 전체 본문 매핑
      },
    });

    const feed = await parser.parseString(xmlText);

    const plainItems: FeedItem[] = feed.items.map((item) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      guid: item.guid,
      content: item.content, // 👈 전체 본문
      contentSnippet: item.contentSnippet, // 👈 요약
      categories: item.categories,
    }));

    // --- 💡 [요청하신 본문 번역 로직] ---
    const translatedItems = await Promise.all(
      plainItems.map(async (item) => {
        try {
          const [translatedTitle, translatedSnippet, translatedContent] =
            await Promise.all([
              translate(item.title, { from: "en", to: "ko" }),
              translate(item.contentSnippet || "", { from: "en", to: "ko" }),
              // 💡 [추가] 본문(HTML) 번역
              translate(item.content, { from: "en", to: "ko" }),
            ]);

          return {
            ...item,
            title: translatedTitle.text,
            contentSnippet: translatedSnippet.text,
            content: translatedContent.text, // 💡 번역된 본문으로 덮어쓰기
          };
        } catch (error) {
          console.warn("Translation failed for item:", item.title);
          console.log(error);
          return item; // 번역 실패 시 원본(영어) 반환
        }
      })
    );

    return translatedItems;
  } catch (error) {
    console.error("Error fetching or parsing Gemini RSS feed:", error);
    return [];
  }
}