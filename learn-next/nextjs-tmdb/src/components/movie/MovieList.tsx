"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";
import MovieImage from "./MovieImage";
export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          380: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          740: {
            slidesPerView: 4,
          },
          980: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-list__item">
              <Link href={`/detail/${movie.id}`}>
                <figure>
                  {/* Lazy -> 이미지가 화면에 보여야 로드를 합니다. */}
                  {/* loading="eager" -> 이미지를 즉시 로딩한다. */}
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
                  <span className="release_date">{movie.release_date}</span>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
