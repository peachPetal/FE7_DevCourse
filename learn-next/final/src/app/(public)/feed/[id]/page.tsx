// src/app/(public)/feed/[id]/page.tsx

import FeedPostClient from "@/components/feed/FeedPostClient";
import { FeedItem } from "@/types";
// 💡 [수정] 헬퍼 파일에서 import
import {
  getGeminiProductFeed,
} from "@/utils/helper/server"; // 👈 경로 수정
import { redirect } from "next/navigation";

export default async function FeedItemPage({
  params,
}: {
  params: Promise<{ id: string }>; // 💡 1. await params 타입 (수정 완료됨)
}) {
  const { id: safeGuid } = await params; // 💡 2. await 사용 (수정 완료됨)
  let item: FeedItem | undefined;

  if (!safeGuid) {
    redirect("/");
  }

  try {
    // 💡 3. [핵심 수정]
    // 실패한 atob, replace, padding 로직을 모두 제거하고
    // Node.js의 Buffer로 한 번에 디코딩합니다.
    // 'base64url' 인코딩은 +, / 대신 -, _를 사용하고 패딩(=)을 자동으로 처리합니다.
    const guid = Buffer.from(safeGuid, "base64url").toString("utf8");

    const items = await getGeminiProductFeed();
    item = items.find((i: FeedItem) => i.guid === guid);

  } catch (error) {
    // Buffer 디코딩 실패 또는 getGeminiProductFeed 실패 시
    console.error("Failed to decode GUID or find item:", error);
    redirect("/");
  }

  if (!item) {
    redirect("/");
  }

  return <FeedPostClient item={item} />;
}