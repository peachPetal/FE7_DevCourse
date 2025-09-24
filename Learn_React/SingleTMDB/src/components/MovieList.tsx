// import MovieLoaderCard from "./MovieCardLoader";
// import MovieListItem from "./MovieListItem";

// export default function MovieList() {
//   return (
//     <>
//       <article className="bg-black px-4 pt-4 xs:px-0">
//         <section className="container mx-auto py-8 text-white">
//           <span className="text-yellow-600">ONLINE STREAMING</span>
//           <h2 className="text-[36px] font-bold mb-8">Popular</h2>
//           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
//             {/* 아이템 1개 */}
//             <MovieListItem />
//             <MovieLoaderCard />
//           </div>
//         </section>
//       </article>
//     </>
//   );
// }

// MovieList.tsx

import MovieListItem from "./MovieListItem";

// 영화 데이터 타입 정의 (TypeScript)
interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

interface MovieListProps {
  title: string;
  movies: Movie[];
}

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <section className="container mx-auto text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </article>
  );
}