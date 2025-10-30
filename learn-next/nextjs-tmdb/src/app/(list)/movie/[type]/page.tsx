import ListMovieClient from "@/components/list/ListMovieClient";
import ListMovieLoader from "@/components/list/ListMovieLoader";
import { getMovieMoreData } from "@/libs/api/movie";
import { getTitle } from "@/libs/helper";
import { Suspense } from "react";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ keyword: string }>;
}) {
  const { type } = await params;
  const { keyword } = await searchParams;

  const { results, total_pages }: { results: Movie[]; total_pages: number } =
    await getMovieMoreData(1, type, keyword);
  return (
    <>
      <section className="movie list">
        <h4 className="movie-subtext">{getTitle(type, keyword)}</h4>
        <Suspense fallback={<ListMovieLoader />}>
          <ListMovieClient
            key={keyword}
            initialMovies={results}
            totalPages={total_pages}
            type={type}
            keyword={keyword}
          />
        </Suspense>
      </section>
    </>
  );
}
