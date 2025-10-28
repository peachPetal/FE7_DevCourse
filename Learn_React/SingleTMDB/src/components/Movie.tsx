import MovieError from "./MovieError";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";
import { useFetchMovies } from "../useFetchMovies";

export default function Movie() {
  const { data, loading, error } = useFetchMovies();

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
      {renderMovieList("Popular", data.popular)}
      {renderMovieList("Upcoming", data.upcoming)}
    </>
  );
}