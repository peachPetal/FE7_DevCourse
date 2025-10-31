import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 로그인한 사용자가 접근하면
  // 루트로 이동
  if (user) {
    redirect("/");
  }

  return <>{children}</>;
}
