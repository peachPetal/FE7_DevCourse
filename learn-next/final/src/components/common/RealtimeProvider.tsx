"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// 💡 layout.tsx로부터 userId를 props로 받습니다.
export default function RealtimeProvider({
  userId,
  children,
}: {
  userId: string | undefined;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // 💡 로그인한 사용자(userId)가 있을 때만 구독
    if (userId) {
      const channel = supabase
        .channel(`user-profile-${userId}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE", // 💡 프로필 "수정"만 감지
            schema: "public",
            table: "profiles",
            filter: `id=eq.${userId}`, // 💡 "로그인한 내" 프로필만
          },
          (payload) => {
            // 💡 내 프로필이 수정되면 (예: /additionalInfo 페이지)
            // 💡 헤더를 포함한 모든 데이터를 새로고침합니다.
            console.log("Profile updated!", payload);
            router.refresh();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [supabase, userId, router]);

  // 💡 자식 컴포넌트들 (Header, main, Footer)을 그대로 렌더링
  return <>{children}</>;
}