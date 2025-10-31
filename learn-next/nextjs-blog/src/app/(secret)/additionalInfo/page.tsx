import AdditionalInfoForm from "@/components/auth/AdditionalInfoForm";
import { FormState } from "@/types";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AdditionalInfoPage({
  searchParams,
}: {
  searchParams: Promise<{ url: string }>;
}) {
  const { url } = await searchParams;
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect(url ? url : "/"); // or redirect("/login")
  }

  const { data: profileRows, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    redirect("/auth/login-failed");
  }

  const profile = profileRows;

  // 서버 액션 정의 (폼이 이 함수를 호출하게 됨)
  async function updateProfile(
    prevState: FormState,
    formData: FormData
  ): Promise<FormState> {
    "use server";

    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user || userError) {
      return {
        success: false,
        error: "로그인이 필요합니다.",
      };
    }

    const displayName = formData.get("display_name")?.toString() ?? "";
    const bio = formData.get("bio")?.toString() ?? "";

    if (!bio) {
      return {
        success: false,
        error: "입력 값을 모두 채워주세요",
      };
    }

    const { error: updateErrors } = await supabase
      .from("profiles")
      .update({ display_name: displayName, bio })
      .eq("id", user.id);

    if (updateErrors) {
      return {
        success: false,
        error: "프로필 저장중에 문제가 발생하였습니다.",
      };
    }

    return { success: true, error: null };
  }

  return (
    <div className="max-w-md mx-auto mt-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight">
            Complete Your Profile
          </h1>
          <p className="text-gray-400 text-sm">
            Tell us a bit more about yourself
          </p>
        </div>

        <div className="border border-gray-800 rounded-lg p-8 bg-gray-900/30">
          <AdditionalInfoForm profile={profile} action={updateProfile} url={url}/>
        </div>
      </div>
    </div>
  );
}
