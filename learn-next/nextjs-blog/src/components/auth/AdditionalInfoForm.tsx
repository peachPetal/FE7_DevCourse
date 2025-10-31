"use client";

import { FormState, Profile } from "@/types";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function AdditionalInfoForm({
  profile,
  action,
  url,
}: {
  profile: Profile;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  url: string;
}) {
  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    error: null,
  });

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    } else if (state.success && !state.error) {
      alert("프로필이 성공적으로 업데이트 되었습니다.");
      redirect("/");
    }
  }, [state, url]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Email</label>
        <input
          type="text"
          name="email"
          defaultValue={profile?.email ?? ""}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Display Name</label>
        <input
          type="text"
          name="display_name"
          defaultValue={profile?.display_name ?? ""}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-gray-300">Bio</label>
        <textarea
          name="bio"
          rows={4}
          defaultValue={profile?.bio ?? ""}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm"
        />
      </div>

      {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

      {state.success && (
        <p className="text-green-500 text-sm">
          ✅ 프로필이 업데이트되었습니다!
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm font-medium"
      >
        {isPending ? "Saving..." : "Continue"}
      </button>
    </form>
  );
}
