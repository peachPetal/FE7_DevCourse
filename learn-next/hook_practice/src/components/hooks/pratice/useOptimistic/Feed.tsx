import { Instagram } from "lucide-react";
import { PostCard } from "./PostCard";
import { dummyPosts } from "./dummyPost";
import { useOptimisticLike } from "./useOptimisticLike";

export default function Feed() {
  const { optimisticPosts, toggleLike } = useOptimisticLike(dummyPosts);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-screen-md mx-auto px-4 h-14 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Instagram className="w-6 h-6" />
            <h1 className="text-xl font-semibold tracking-tight">Instagram</h1>
          </div>
        </div>
      </header>

      <main className="max-w-screen-md mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {optimisticPosts.map((post) => (
            <PostCard key={post.id} post={post} onLike={toggleLike} />
          ))}
        </div>
      </main>
    </div>
  );
}
