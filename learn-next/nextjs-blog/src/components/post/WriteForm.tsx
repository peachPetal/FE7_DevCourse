"use client";

import { createClient } from "@/utils/supabase/client";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function WriteForm() {
  // ?post_id=1
  const searchParams = useSearchParams();
  const postId = searchParams.get("post_id"); // 1

  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [tags, setTags] = useState<string[]>([]); // 태그
  const [tagInput, setTagInput] = useState(""); // 태그 입력창
  const [submitting, setSubmitting] = useState(false);

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePublish = async () => {
    if (title.trim() === "") {
      alert("제목을 입력해주세요");
      return;
    }

    if (content.trim() === "") {
      alert("내용을 입력해주세요");
      return;
    }

    // 태그 문자열
    const tagString = tags.join(",");

    try {
      setSubmitting(true);
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        alert("로그인이 필요합니다.");
        setSubmitting(false);
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            profile_id: user.id,
            title: title.trim(),
            content: content.trim(),
            tags: tagString,
          },
        ])
        .select("id")
        .single();

      if (error) {
        alert("게시글 등록 중 오류가 발생했습니다.");
        setSubmitting(false);
        return;
      }

      const newPostId = data.id;
      if (newPostId) {
        alert("게시글이 등록되었습니다.");
        router.push(`/post/${newPostId}`);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!postId) return;
    // 즉시 실행함수
    (async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!user || userError) {
        alert("로그인 후 수정이 가능합니다.");
        router.replace("/auth/login");
        return;
      }

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", Number(postId))
        .eq("profile_id", user?.id ?? "")
        .single();

      if (!data || error) {
        alert("내 게시글만 수정 가능합니다.");
        router.replace("/");
        return;
      }

      setTitle(data.title ?? "");
      setContent(data.content ?? "");
      if (Array.isArray(data.tags)) {
        setTags(data.tags);
      } else if (typeof data.tags === "string") {
        setTags(
          data.tags
            .split(",")
            .map((t: string) => t.trim())
            .filter(Boolean)
        );
      }
    })();
  }, [postId, router, supabase]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-light tracking-tight">Write a Post</h1>
          <p className="text-gray-400 text-sm">
            Share your thoughts with the world
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none font-light placeholder:text-gray-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-400">
              Content (Markdown)
            </label>
            <textarea
              placeholder="Write your post in markdown...

## Heading 2
### Heading 3

**bold text**
*italic text*

- List item 1
- List item 2"
              rows={20}
              className="w-full px-4 py-3 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none text-sm font-mono resize-none leading-relaxed"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm text-gray-400">Tags</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag();
                  }
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-700 focus:outline-none text-sm"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
              >
                Add
              </button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 rounded bg-gray-800 text-gray-300 text-xs"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-white"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
              onClick={handlePublish}
              disabled={submitting}
            >
              {submitting && (postId ? "Updating..." : "Publishing..." ) ? "Publish" : "Update"}
            </button>
            <button className="px-6 py-2 rounded-lg border border-gray-800 hover:border-gray-700 hover:bg-gray-900/50 transition-colors text-sm">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
