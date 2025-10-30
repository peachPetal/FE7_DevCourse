import DetailInfo from "@/components/detail/DetailInfo";
import DetailInfoLoader from "@/components/detail/DetailInfoLoader";
import DetailRelated from "@/components/detail/DetailRelated";
import DetailTrailer from "@/components/detail/DetailTrailer";
import DetailTraillerLoading from "@/components/detail/DetailTraillerLoading";
import MovieLoader from "@/components/main/MovieLoader";
import { Suspense } from "react";
// import MainMovie from "@/components/main/MainMovie";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <Suspense fallback={<DetailTraillerLoading />}>
        <DetailTrailer id={id} />
      </Suspense>
      <Suspense fallback={<DetailInfoLoader />}>
        <DetailInfo id={id} />
      </Suspense>

      <Suspense
        fallback={
          <MovieLoader title="비슷한 장르의 영화" subTitle="Related Movies" />
        }
      >
        <DetailRelated id={id} />
      </Suspense>
    </>
  );
}
