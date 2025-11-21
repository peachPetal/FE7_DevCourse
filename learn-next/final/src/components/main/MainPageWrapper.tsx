"use client";

import { useEffect } from "react"; // 💡 useEffect 추가
import { Pagination } from "../common/Pagination";
import { useRouter } from "next/navigation"; // 💡 useRouter 추가
import { createClient } from "@/utils/supabase/client"; // 💡 supabase client 추가

export default function MainPageWrapper({
  totalPosts,
  currentPage,
  postsPerPage,
}: {
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
}) {
  const router = useRouter(); // 💡 router 사용

useEffect(() => {
    const supabase = createClient();

    // 1. posts 채널 구독
    const postsChannel = supabase
      .channel("public:posts") // 💡 채널 이름 1
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "posts", // 👈 posts 테이블 감지
        },
        (payload) => {
          console.log("Posts table changed!", payload);
          router.refresh();
        }
      )
      .subscribe();

    // 2. [추가] comments 채널 구독
    const commentsChannel = supabase
      .channel("public:comments")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "comments", // 👈 comments 테이블 감지
        },
        (payload) => {
          console.log("Comments table changed!", payload);
          // 💡 댓글이 변경되어도 페이지 새로고침
          router.refresh(); 
        }
      )
      .subscribe();

    // 3. [수정] 컴포넌트가 사라질 때 "두 채널 모두" 구독 해제
    return () => {
      supabase.removeChannel(postsChannel);
      supabase.removeChannel(commentsChannel);
    };
  }, [router]);

  const handlePageChange = (newPage: number) => {
    router.push(`/?page=${newPage}`);
  };

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        visibleRange={2}
        onPageChange={handlePageChange}
      />
    </>
  );
}