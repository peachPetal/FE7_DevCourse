"use client";

import { getMovieMoreData } from "@/libs/api/movie";
import { useCallback, useEffect, useRef, useState } from "react";
import MovieImage from "../movie/MovieImage";
import Link from "next/link";

export default function ListMovieClient({
  initialMovies,
  totalPages,
  type,
  keyword,
}: {
  initialMovies: Movie[];
  totalPages: number;
  type: string;
  keyword: string;
}) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(page < totalPages);

  const targetElRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const { results }: { results: Movie[] } = await getMovieMoreData(
        nextPage,
        type,
        keyword
      );

      // 중복 제거 후 추가
      setMovies((prevMovies) => {
        const ids = new Set(prevMovies.map((m) => m.id));
        return [...prevMovies, ...results.filter((m) => !ids.has(m.id))];
      });

      setPage(nextPage);
      if (nextPage >= totalPages) setHasMore(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [page, type, totalPages, keyword]);

  useEffect(() => {
    if (!targetElRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(targetElRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMore]);

  return (
    <>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link
            href={`/detail/${movie.id}`}
            key={movie.id}
            className="movie-list__item"
          >
            <figure>
              <MovieImage poster_path={movie.poster_path} title={movie.title} />
            </figure>
            <div className="movie-list__txt">
              <div
                className={`progress-circle p${Math.floor(
                  movie.vote_average * 10
                )} ${Math.floor(movie.vote_average * 10) > 50 ? "over50" : ""}`}
              >
                <span>{Math.floor(movie.vote_average * 10)}%</span>
                <div className="left-half-clipper">
                  <div className="first50-bar"></div>
                  <div className="value-bar"></div>
                </div>
              </div>
              <strong className="movie-list__title">{movie.title}</strong>
              <p className="movie-list__desc">{movie.overview}</p>
              <span className="movie-list__release">
                {movie.release_date} / 평점 {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div ref={targetElRef} style={{ height: "1px" }}></div>
    </>
  );
}
