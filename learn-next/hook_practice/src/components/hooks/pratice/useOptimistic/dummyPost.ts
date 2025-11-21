import { Post } from "./type";

export const dummyPosts: Post[] = [
  {
    id: "1",
    username: "travel_enthusiast",
    userAvatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    imageUrl:
      "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 1234,
    isLiked: false,
    caption: "Beautiful sunset at the beach 🌅",
    timestamp: "2h ago",
  },
  {
    id: "2",
    username: "foodie_life",
    userAvatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 856,
    isLiked: false,
    caption: "Best pasta in town! 🍝",
    timestamp: "5h ago",
  },
  {
    id: "3",
    username: "nature_lover",
    userAvatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
    imageUrl:
      "https://images.pexels.com/photos/1437493/pexels-photo-1437493.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 2103,
    isLiked: true,
    caption: "Mountain hiking adventure 🏔️",
    timestamp: "8h ago",
  },
  {
    id: "4",
    username: "city_explorer",
    userAvatar:
      "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150",
    imageUrl:
      "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=800",
    likes: 567,
    isLiked: false,
    caption: "City lights never get old ✨",
    timestamp: "12h ago",
  },
];
