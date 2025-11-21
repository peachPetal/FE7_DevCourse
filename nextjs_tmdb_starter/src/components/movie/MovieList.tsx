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
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-list__item">
              <Link href={`/detail/${movie.id}`}>
                <figure>
                  <MovieImage
                    poster_path={movie.poster_path}
                    title={movie.title}
                  />
                </figure>
                <div className="movie-list__txt">
                  <div className={`progress-circle p${Math.floor(movie.vote_average * 10)} ${Math.floor(movie.vote_average * 10) > 50 && "over50"}`}>
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
