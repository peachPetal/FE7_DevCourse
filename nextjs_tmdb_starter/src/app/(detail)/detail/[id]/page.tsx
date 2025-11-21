import DetailInfo from "@/components/detail/DetailInfo";
import DetailInfoLoading from "@/components/detail/DetailInfoLoading";
import DetailTrailer from "@/components/detail/DetailTrailer";
import DetailTrailerLoading from "@/components/detail/DetailTrailerLoading";
import RelatedMovies from "@/components/detail/RelatedMovies";
import MainMovieLoading from "@/components/main/MainMovieLoading";
import { Suspense } from "react";

export default async function page({ params }: { params: { id: number } }) {
  const { id } = await params;
  return (
    <>
      <Suspense fallback={<DetailTrailerLoading />}>
        <DetailTrailer id={id} />
      </Suspense>
      <Suspense fallback={<DetailInfoLoading />}>
        <DetailInfo id={id} />
      </Suspense>
      <Suspense fallback={<MainMovieLoading title="Related Movies" subtitle="관련있는 영화"/>}>
        <RelatedMovies id={id}/>
      </Suspense>
    </>
  );
}
