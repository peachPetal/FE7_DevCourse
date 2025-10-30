import { getMovieDetailData } from "@/libs/api/movie";
import MainMovie from "../main/MainMovie";

export default async function DetailRelated({ id }: { id: string }) {
  const detail: MovieDetail = await getMovieDetailData(id);
  const genres = detail.genres.map((v) => v.id).join(", ");

  return (
    <>
      <MainMovie
        type="discover/movie"
        title="비슷한 장르의 영화"
        subTitle="Related Movies"
        genres={genres}
      />
    </>
  );
}
