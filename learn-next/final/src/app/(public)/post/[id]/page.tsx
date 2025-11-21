import PostClient from "@/components/post/PostClient";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import GeminiProductFeed from "@/components/feed/GeminiProductFeed";
import { getGeminiProductFeed } from "@/utils/helper/server";

// 💡 GeminProductFeed.tsx에서 FeedItem 타입을 export 해야 합니다.
// (또는 types/index.d.ts로 옮기세요)
import { FeedItem } from "@/types";
import FeedPostClient from "@/components/feed/FeedPostClient";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: postRows, error: postError } = await supabase
    .from("posts")
    .select(
      `
    id,
    title,
    content,
    tags,
    created_at,
    profile_id,
    profiles(*),
    comments(*)
    `
    )
    .eq("id", parseInt(id))
    .single();

  if (postError || !postRows) {
    redirect("/");
  }
  return (
    <>
      <PostClient postRows={postRows} userId={user?.id} />
    </>
  );
}

export async function FeedItemPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: encodedGuid } = params;

  if (!encodedGuid) {
    redirect("/");
  }

  // 1. Base64로 인코딩된 guid를 디코딩
  // atob: Base64 문자열을 원래 guid로 디코딩
  const guid = atob(encodedGuid);

  // 2. RSS 피드를 다시 가져옴 (Next.js fetch 캐시가 재사용)
  const items = await getGeminiProductFeed();

  // 3. guid로 해당 아이템 찾기
  const item = items.find((i: FeedItem) => i.guid === guid);

  if (!item) {
    redirect("/");
  }

  // 4. 찾은 item을 클라이언트 컴포넌트에 전달
  return <FeedPostClient item={item} />;
}