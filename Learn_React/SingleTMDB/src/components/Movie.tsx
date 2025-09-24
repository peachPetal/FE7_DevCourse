// import MovieHeader from "./MovieHeader";
// import MovieList from "./MovieList";
// import MovieLoader from "./MovieLoader";
// import MovieMain from "./MovieMain";

// export default function Movie() {
//   return (
//     <>
//       <MovieHeader />
//       <MovieMain />
//       <MovieList />
//       <MovieLoader title="Popular" />
//     </>
//   );
// }

// Movie.tsx

import MovieError from "./MovieError";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";
import { useFetchMovies } from "../useFetchMovies";

export default function Movie() {
  const { data, loading, error } = useFetchMovies();

  // 각 영화 목록을 렌더링하는 함수
  const renderMovieList = (title: string, movies: any[] | null) => {
    if (error) return <MovieError title={title} />;
    if (loading) return <MovieLoader title={title} />;
    if (movies) return <MovieList title={title} movies={movies} />;
    return null;
  };

  return (
    <>
      <MovieHeader />
      <MovieMain />
      {renderMovieList("Now Playing", data.nowPlaying)}
      {renderMovieList("Upcoming", data.upcoming)}
      {renderMovieList("Popular", data.popular)}
    </>
  );
}