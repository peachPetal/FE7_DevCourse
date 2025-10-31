import { Database } from "@/utils/supabase/supabase";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"] | null;
export type Post = Database["public"]["Tables"]["posts"]["Row"] | null;
export type Comment = Database["public"]["Tables"]["comments"]["Row"] | null;

export type MainDetail = Post & {
  profiles: Profile;
}

export type PostDetail = Post & {
  profiles: Profile;
} & {
  comments: Comment;
}
export type FormState = {
  success: boolean;
  error: string | null;
};
