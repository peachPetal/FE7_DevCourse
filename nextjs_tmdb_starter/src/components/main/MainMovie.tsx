import Link from "next/link";
import "swiper/css";
import MovieList from "../movie/MovieList";
import { getMovieData } from "@/libs/api/movie";

export default async function MainMovie({
  type,
  title,
  subtitle,
  genres,
}: {
  type: "now_playing" | "popular" | "upcoming" | "discover/movie";
  title: string;
  subtitle: string;
  genres?: string;
}) {
  const { results } = await getMovieData(type, genres);
  if (!results || results.length === 0) return null;
  return (
    <>
      <section className="movie">
        <h3 className="movie-category">{title}</h3>
        <h4 className="movie-subtext">
          {subtitle} <Link href={`/movie/${type}`}>더보기</Link>
        </h4>
        <div className="movie-list">
          {/* <div className="movie-list__item">
            <Link href="/detail/1" className="skeleton-list-item ui0"></Link>
          </div> */}
          <MovieList movies={results} />
        </div>
      </section>
    </>
  );
}
