import { useState } from "react";
import { Post } from "./type";

export function useOptimisticLike(initialPosts: Post[]) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const toggleLike = async (postId: string) => {
    try {
      await simulateApiCall();

      setPosts((currentPosts) =>
        currentPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                isLiked: !post.isLiked,
                likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      );
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  };

  return {
    posts,
    toggleLike,
  };
}

function simulateApiCall(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}
