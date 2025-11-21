import { Database } from "@/utils/supabase/supabase";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"] | null;
export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type Comment = Database["public"]["Tables"]["comments"]["Row"];

export type MainDetail = Post & {
  profiles: Profile;
};

export type PostDetail = Post & {
  profiles: Profile;
} & {
  comments: Comment[];
};
export type FormState = {
  success: boolean;
  error: string | null;
};
// 💡 [추가] FeedItem 타입을 여기로 이동
export type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  content: string;
  contentSnippet?: string;
  categories?: string[];
};