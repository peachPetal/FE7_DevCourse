import { getMovieData, getMovieVideoData } from "@/libs/api/movie";
import Image from "next/image";

export default async function DetailTrailer({ id }: { id: string }) {
  const [{ results: trailer }, detail]: [{ results: MovieTrailler[] }, Movie] =
    await Promise.all([getMovieVideoData(id), getMovieData(id)]);

  const filterTrailer =
    trailer
      .filter((v) => v.site === "YouTube")
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )[0] || null;

  return (
    <>
      <section className="trailer">
        {filterTrailer && (
          <iframe
            src={`https://www.youtube.com/embed/${filterTrailer.key}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              border: 0,
              width: "90%",
              maxWidth: "900px",
              aspectRatio: "16 / 9",
            }}
          ></iframe>
        )}

        {!filterTrailer && (
          <Image
            src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
            alt={detail.title}
            width={900}
            height={0}
            style={{
              width: "90%",
              maxWidth: "900px",
              height: "auto",
              maxHeight: "500px",
            }}
          />
        )}
      </section>
    </>
  );
}
