"use server";

import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";

// 💡 [수정] 새로 통합된 helper 파일에서 import
import {
  getGeminiProductFeed,
} from "@/utils/helper/server"; // 👈 경로 수정
import { FeedItem } from "@/types";

export const githubLogin = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_URL}/auth/callback`,
    },
  });

  if (data.url) {
    redirect(data.url); 
  }
};

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
}

/* --- 💡 [여기에 새 서버 액션 추가] --- */

const ITEMS_PER_PAGE = 5; // 한 번에 5개씩 불러옵니다.

/**
 * @param page 1부터 시작하는 페이지 번호
 */
export async function getMoreFeedItems(page: number): Promise<FeedItem[]> {
  // getGeminiProductFeed는 fetch 캐시 덕분에 전체 목록을 다시 다운로드하지 않습니다.
  const allItems = await getGeminiProductFeed();

  // 요청된 페이지에 해당하는 5개 아이템을 잘라 반환합니다.
  const offset = page * ITEMS_PER_PAGE;
  return allItems.slice(offset, offset + ITEMS_PER_PAGE);
}