// 화면 랜더링과 관련 없는 작업 -> 사이드이펙트

import { useEffect, useState } from "react";

// 사이드이펙트 -> useEffect()
export default function Fetch () {
    const [posts, setPosts] = useState<{
        id: string;
        title: string;
        views: number;
    }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try{
                setIsLoading(true);
                const res = await fetch("http://localhost:3001/posts");
                if(!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                // console.log(res);
                setPosts(data);
            }catch(e){
                // console.error(e);
                setError(e instanceof Error ? e.message : "unknown error");
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
        return () => {};
    }, []);

    if(isLoading) return <p>Loading...</p>
    if(error) return <p style={{color: "red"}}>{error}</p>
  return (
    <>
      <h1>Fetch Component</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <ul>
        {posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

// 화면 렌더링과 관련 없는 작업 -> 사이드이펙트
// 사이드이펙트 -> useEffect()

// import { useEffect, useState } from "react";

// export default function Fetch() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [comments, setComments] = useState<Comments[]>([]);
//   const [isLoadingComments, setIsLoadingComments] = useState(true);
//   const [errorComments, setErrorComments] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch("http://localhost:3001/posts");
//         if (!res.ok) throw new Error(res.statusText);
//         const data = await res.json();
//         setPosts(data);
//       } catch (e) {
//         setError(e instanceof Error ? e.message : "unknown error");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const fetchComments = async () => {
//       try {
//         setIsLoadingComments(true);
//         const res = await fetch("http://localhost:3001/comments");
//         if (!res.ok) throw new Error(res.statusText);
//         const data = await res.json();
//         setComments(data);
//       } catch (e) {
//         setErrorComments(e instanceof Error ? e.message : "unknown error");
//       } finally {
//         setIsLoadingComments(false);
//       }
//     };
//     fetchComments();
//     fetchData();
//   }, []);

//   if (isLoading || isLoadingComments) return <p>Loading...</p>;
//   if (error || errorComments)
//     return <p style={{ color: "red" }}>{error || errorComments}</p>;

//   return (
//     <>
//       <pre>{JSON.stringify(posts, null, 2)}</pre>
//       <pre>{JSON.stringify(comments, null, 2)}</pre>
//     </>
//   );
// }
