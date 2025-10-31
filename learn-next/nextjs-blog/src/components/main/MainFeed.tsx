// import { Pagination } from "@/components/common/Pagination";
// import MainPostLoader from "@/components/skeleton/MainPostLoader";
// import { MainDetail } from "@/types";
// import { Suspense, useState } from "react";
// import MainFeedItem from "./MainFeedItem";
// import MainPageWrapper from "./MainPageWrapper";

// // const mockPosts = [
// //   {
// //     id: 1,
// //     title: "Getting Started with React 19",
// //     excerpt:
// //       "Explore the new features and improvements in React 19, including the new compiler and server components.",
// //     author: "John Doe",
// //     date: "2025-10-20",
// //     tags: ["React", "JavaScript"],
// //     readTime: "5 min read",
// //   },
// //   {
// //     id: 2,
// //     title: "Building Modern UI with Tailwind CSS",
// //     excerpt:
// //       "Learn how to create beautiful, responsive interfaces using utility-first CSS framework.",
// //     author: "Jane Smith",
// //     date: "2025-10-18",
// //     tags: ["CSS", "Design"],
// //     readTime: "8 min read",
// //   },
// //   {
// //     id: 3,
// //     title: "TypeScript Best Practices",
// //     excerpt:
// //       "Discover the best practices for writing maintainable and type-safe TypeScript code.",
// //     author: "Mike Johnson",
// //     date: "2025-10-15",
// //     tags: ["TypeScript", "Programming"],
// //     readTime: "6 min read",
// //   },
// //   {
// //     id: 4,
// //     title: "Mastering Async JavaScript",
// //     excerpt:
// //       "Deep dive into promises, async/await, and handling asynchronous operations effectively.",
// //     author: "Sarah Lee",
// //     date: "2025-10-12",
// //     tags: ["JavaScript", "Async"],
// //     readTime: "10 min read",
// //   },
// //   {
// //     id: 5,
// //     title: "State Management in 2025",
// //     excerpt:
// //       "Compare different state management solutions and find the right one for your project.",
// //     author: "David Kim",
// //     date: "2025-10-10",
// //     tags: ["React", "State Management"],
// //     readTime: "7 min read",
// //   },
// // ];
// export default function MainFeed() {
//   const [page, setPage] = useState(1);

//   return (
//     <>
//       <div className="space-y-8">
//         <div className="space-y-2">
//           <h1 className="text-4xl font-light tracking-tight">Latest Posts</h1>
//           <p className="text-gray-400 text-sm">Thoughts, stories and ideas</p>
//         </div>
//         <div className="space-y-6">
//           {/* <MainPostLoader /> */}
//           <Suspense fallback={<MainPostLoader />}>
//             <MainFeedItem />
//           </Suspense>
//         </div>
// <MainPageWrapper />
//       </div>
//     </>
//   );
// }


import MainPostLoader from "@/components/skeleton/MainPostLoader";
import { Suspense } from "react";
import MainFeedItem from "./MainFeedItem";
import MainPageWrapper from "./MainPageWrapper";

export default function MainFeed() {
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-light tracking-tight">Latest Posts</h1>
          <p className="text-gray-400 text-sm">Thoughts, stories and ideas</p>
        </div>
        <div className="space-y-6">
          <Suspense fallback={<MainPostLoader />}>
            <MainFeedItem />
          </Suspense>
        </div>
        <MainPageWrapper />
      </div>
    </>
  );
}
