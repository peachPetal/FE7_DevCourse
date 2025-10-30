import MainBanner from "@/components/main/MainBanner";
import MainBannerLoader from "@/components/main/MainBannerLoader";
import MainMovie from "@/components/main/MainMovie";
import MovieLoader from "@/components/main/MovieLoader";
import { Suspense } from "react";

// /movie/now_playing
// /movie/popular
export default function page() {
  const randomNumber = Math.random();
  return (
    <>
      <Suspense fallback={<MainBannerLoader />}>
        <MainBanner randomNumber={randomNumber} />
      </Suspense>
      <Suspense
        fallback={<MovieLoader title="상영중인 영화" subTitle="Now Movies" />}
      >
        <MainMovie
          title="개봉예정 영화"
          subTitle="Upcoming Movies"
          type="upcoming"
        />
      </Suspense>
      <Suspense
        fallback={<MovieLoader title="상영중인 영화" subTitle="Now Movies" />}
      >
        <MainMovie
          title="상영중인 영화"
          subTitle="Now Movies"
          type="now_playing"
        />
      </Suspense>
      <Suspense
        fallback={<MovieLoader title="상영중인 영화" subTitle="Now Movies" />}
      >
        <MainMovie
          title="인기중인 영화"
          subTitle="Popular Movies"
          type="popular"
        />
      </Suspense>
    </>
  );
}
