import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { Post } from "./type";
interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

export function PostCard({ post, onLike }: PostCardProps) {
  const handleLikeClick = () => {
    onLike(post.id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 max-w-[470px] w-full">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <img
            src={post.userAvatar}
            alt={post.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <button className="text-gray-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="w-full aspect-square bg-gray-100">
        <img
          src={post.imageUrl}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLikeClick}
              className="transition-transform active:scale-90"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  post.isLiked
                    ? "fill-red-500 text-red-500"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              />
            </button>
            <button className="transition-transform active:scale-90">
              <MessageCircle className="w-6 h-6 text-gray-900 hover:text-gray-600" />
            </button>
            <button className="transition-transform active:scale-90">
              <Send className="w-6 h-6 text-gray-900 hover:text-gray-600" />
            </button>
          </div>
          <button className="transition-transform active:scale-90">
            <Bookmark className="w-6 h-6 text-gray-900 hover:text-gray-600" />
          </button>
        </div>

        <div className="mb-2">
          <span className="font-semibold text-sm">
            {post.likes.toLocaleString()} likes
          </span>
        </div>

        <div className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          <span className="text-gray-900">{post.caption}</span>
        </div>

        <div className="text-xs text-gray-500 mt-2">{post.timestamp}</div>
      </div>
    </div>
  );
}
