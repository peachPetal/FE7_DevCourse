import MainBanner from "@/components/main/MainBanner";
import MainBannerLoading from "@/components/main/MainBannerLoading";
import MainMovie from "@/components/main/MainMovie";
import MainMovieLoading from "@/components/main/MainMovieLoading";
import { Suspense } from "react";

export default function page() {
  return (
    <>
      <Suspense fallback={<MainBannerLoading />}>
        <MainBanner randomNumber={Math.random()} />
      </Suspense>
      <Suspense fallback={<MainMovieLoading title="Now Playing" subtitle="상영중인 영화"/>}>
        <MainMovie
          type="now_playing"
          title="Now Playing"
          subtitle="상영중인 영화"
        />
      </Suspense>
      <Suspense fallback={<MainMovieLoading title="Popular" subtitle="인기있는 영화"/>}>
        <MainMovie type="popular" title="Popular" subtitle="인기있는 영화" />
      </Suspense>
      <Suspense fallback={<MainMovieLoading title="upcoming" subtitle="개봉예정 영화"/>}>
        <MainMovie type="upcoming" title="Upcoming" subtitle="개봉예정 영화" />
      </Suspense>
    </>
  );
}
