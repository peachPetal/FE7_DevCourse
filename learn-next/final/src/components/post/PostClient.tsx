"use client";
import DeleteModal from "@/components/common/DeleteModal";
import { PostDetail } from "@/types";
import { estimateReadTime } from "@/utils/helper";
import { createClient } from "@/utils/supabase/client";
import { format } from "date-fns";
import { Clock, Edit, Trash2, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // 💡 useEffect 추가

export default function PostClient({
  postRows,
  userId,
}: {
  postRows: PostDetail;
  userId: string | undefined;
}) {
  const router = useRouter(); // 💡 router.refresh()를 위해 필요
  const supabase = createClient();

  // ❌ [제거] 이 State가 문제를 일으킵니다.
  // const [commentList, setCommentList] = useState(postRows.comments);
  const [newComment, setNewComment] = useState("");
  const [submittingComment, setSubmittingComment] = useState(false);

  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState<number | null>(null);

  // 💡 [추가] Realtime 구독 로직
  useEffect(() => {
    // 💡 이 컴포넌트가 활성화된 동안 들을 채널 생성
    const channel = supabase
      .channel(`post-${postRows.id}`)
      .on(
        "postgres_changes",
        {
          event: "*", // 💡 INSERT, UPDATE, DELETE 모두 감지
          schema: "public",
          table: "comments",
          filter: `post_id=eq.${postRows.id}`, // 💡 "이 게시글(postRows.id)에 달린" 댓글만
        },
        (payload) => {
          // 💡 댓글에 변경(추가/삭제/수정)이 생기면, router.refresh() 호출
          // 💡 router.refresh()는 서버 데이터를 다시 가져와 화면을 새로고침합니다.
          console.log("New comment activity!", payload);
          // 💡 [수정] 1초 지연을 주어 DB 복제 지연 시간 확보
          // setTimeout(() => {
          //   router.refresh();
          // }, 500);
          router.refresh();
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE", // 💡 게시글 "수정"만 감지
          schema: "public",
          table: "posts",
          filter: `id=eq.${postRows.id}`, // 💡 "바로 이 게시글(postRows.id)"만
        },
        (payload) => {
          // 💡 게시글 본문이 수정되면 router.refresh() 호출
          console.log("Post updated!", payload);
          // 💡 [수정] 1초 지연 (일관성)
          // setTimeout(() => {
          //   router.refresh();
          // }, 500);
          router.refresh();
        }
      )
      .subscribe();

    // 💡 컴포넌트가 사라질 때 채널 구독 해제 (메모리 누수 방지)
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, postRows.id, router]); // 💡 의존성 배열

  // ... (기존의 handleSubmitComment, handleDeletePost, handleDeleteComment 함수들)
  // 💡 중요: 이 함수들 내부의 router.refresh()는 그대로 두세요.
  // 💡 Realtime은 "다른" 사용자의 변경을 감지하는 용도이고,
  // 💡 기존 router.refresh()는 "내가" 변경을 일으켰을 때 즉시 반영하는 용도입니다.

  const handleSumbitComment = async () => {
if (!userId) {
      alert("로그인 후 댓글을 달 수 있습니다.");
      return;
    }
if (newComment.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }
    setSubmittingComment(true);

// 💡 [수정] .select().single()을 제거합니다.
    // 406 에러를 원천적으로 방지하고, 불필요한 SELECT를 줄입니다.
    const { error } = await supabase.from("comments").insert([
      {
        post_id: postRows.id,
        profile_id: userId,
        content: newComment.trim(),
      },
    ]);

    if (error) {
      alert("댓글 등록에 실패했습니다.");
      setSubmittingComment(false);
      return;
    }

    // ❌ [제거] setCommentList((comment) => [...comment, data]);

// 💡 [수정] router.refresh()를 호출하여 서버로부터 최신 데이터를 가져옵니다.
    // (이 호출은 DB 복제 지연의 영향을 받지 않습니다. 방금 내가 쓴 데이터이기 때문)
    router.refresh();

    setNewComment("");
    setSubmittingComment(false);
  };
  const handleDeletePost = async () => {
    if (userId !== postRows.profile_id) {
      alert("본인의 게시글만 삭제할 수 있습니다.");
      return;
    }
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", postRows.id);

    if (error) {
      alert("게시글 삭제 중 에러가 발생하였습니다.");
      setIsDeletePostModalOpen(false);
      return;
    }

    router.replace("/");
  };

  // const handleDeleteComment = (commentId: number) => {
  //   console.log("Delete comment:", commentId);
  //   setDeleteCommentId(null);
  // };
  // 💡 [수정] 이 함수를 console.log에서 실제 삭제 로직으로 변경합니다.
  const handleDeleteComment = async (commentId: number) => {
    // 방어 로직: 본인 댓글인지 확인
    const commentToDelete = postRows.comments.find((c) => c.id === commentId);
    if (!commentToDelete || commentToDelete.profile_id !== userId) {
      alert("본인의 댓글만 삭제할 수 있습니다.");
      setDeleteCommentId(null);
      return;
    }

    // Supabase에서 댓글 삭제
    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", commentId);

    if (error) {
      alert("댓글 삭제 중 에러가 발생했습니다.");
    } else {
      // 💡 성공 시, 페이지를 새로고침하여 댓글 목록을 갱신합니다.
      router.refresh();
    }

    setDeleteCommentId(null); // 모달 닫기
  };
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {postRows.tags?.split(",").map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-light tracking-tight leading-tight">
              {postRows.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{postRows.profiles?.display_name}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>
                    {" "}
                    {format(new Date(postRows.created_at), "yyyy.MM.dd")}
                  </span>
                </div>
                <span>•</span>
                <span>{estimateReadTime(postRows.content || "")}</span>
              </div>

              <div className="flex items-center gap-2">
                {userId === postRows.profile_id && (
                  <>
                    <Link href={`/write?post_id=${postRows.id}`}>
                      <button className="p-2 rounded hover:bg-gray-800 transition-colors">
                        <Edit size={16} className="text-gray-400" />
                      </button>
                    </Link>
                    <button
                      className="p-2 rounded hover:bg-gray-800 transition-colors"
                      onClick={() => setIsDeletePostModalOpen(true)}
                    >
                      <Trash2 size={16} className="text-gray-400" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="prose prose-invert prose-sm max-w-none">
              {postRows.content?.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-2xl font-light mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-xl font-light mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return (
                  <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-gray-800 space-y-6">
          <h2 className="text-2xl font-light">
            Comments ({postRows.comments.length})
          </h2>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/30">
            <textarea
              placeholder="Add a comment..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-gray-600 focus:outline-none text-sm resize-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="flex justify-end mt-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
                onClick={handleSumbitComment}
                disabled={submittingComment}
              >
                <Send size={14} />
                <span>{submittingComment ? "Post..." : "Post"}</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {/* 💡 [수정] commentList가 아닌 postRows.comments를 직접 map */}
            {postRows.comments.map((comment) => (
              <div
                key={comment.id}
                className="border border-gray-800 rounded-lg p-4 bg-gray-900/30"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-gray-300">
                        {/* {comment.author} */}
                      </span>
                      <span className="text-gray-500">
                        {format(new Date(comment.created_at), "yyyy.MM.dd")}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                  {/* <button
                    className="p-1 rounded hover:bg-gray-800 transition-colors"
                    onClick={() => setDeleteCommentId(comment.id)}
                  >
                    <Trash2 size={14} className="text-gray-500" />
                  </button> */}
                  {/* 💡 [수정] 본인(userId)의 댓글(comment.profile_id)일 때만 삭제 버튼이 보이도록! */}
                  {userId === comment.profile_id && (
                    <button
                      className="p-1 rounded hover:bg-gray-800 transition-colors"
                      onClick={() => setDeleteCommentId(comment.id)}
                    >
                      <Trash2 size={14} className="text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DeleteModal
        isOpen={isDeletePostModalOpen}
        onClose={() => setIsDeletePostModalOpen(false)}
        onConfirm={handleDeletePost}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
      />

      <DeleteModal
        isOpen={deleteCommentId !== null}
        onClose={() => setDeleteCommentId(null)}
        onConfirm={() =>
          deleteCommentId && handleDeleteComment(deleteCommentId)
        }
        title="Delete Comment"
        message="Are you sure you want to delete this comment? This action cannot be undone."
      />
    </>
  );
}
