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
  const [isLoading, setIsLoading] = useState(false); // 무한 스크롤
  const [hasMore, setHasMover] = useState(page < totalPages); // true -> 더 가져올 페이지가 있다

  const targetElRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    setIsLoading(true);
    try {
      const nextPage = page + 1;
      console.log(keyword);
      const { results }: { results: Movie[] } = await getMovieMoreData(
        nextPage,
        type,
        keyword
      );

      // 중복 키를 제거하고 들어가게 됨
      setMovies((movie) => {
        const ids = new Set(movie.map((m) => m.id)); // id 추출
        return [...movie, ...results.filter((m) => !ids.has(m.id))];
      });

      setPage(nextPage);
      if (nextPage >= totalPages) setHasMover(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [page, type, totalPages, keyword]);

  useEffect(() => {
    if (!targetElRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        // isIntersecting -> true
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(targetElRef.current);
  }, [hasMore, isLoading, loadMore]);
  return (
    <>
      <div className="movie-list">
        {movies &&
          movies.map((movie) => (
            <Link
              href={`/detail/${movie.id}`}
              key={movie.id}
              className="movie-list__item"
            >
              <a href="#">
                <figure>
                  <MovieImage
                    poster_path={movie.poster_path}
                    title={movie.title}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div
                    className={`progress-circle p${Math.floor(
                      movie.vote_average * 10
                    )} ${Math.floor(movie.vote_average * 10) > 50 && "over50"}`}
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
              </a>
            </Link>
          ))}
      </div>
      <div ref={targetElRef} style={{ height: "1px" }}></div>
    </>
  );
}
