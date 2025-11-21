import { getMovieData } from "@/libs/api/movie";

export default async function MainBanner({
  randomNumber,
}: {
  randomNumber: number;
}) {
  const { results: movies }: { results : Movie[] } = await getMovieData(
    "now_playing"
  );

  const generateRandomMovie = (randomNumber: number) => {
    const filteredMovies = movies.filter((movie) => movie.overview);
    const randomMovieIndex = Math.floor(randomNumber * filteredMovies.length);
    return filteredMovies[randomMovieIndex];
  }

  const randomMovie = generateRandomMovie(randomNumber);
  
  return (
    <>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}')`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">{randomMovie.title}</h2>
            <p className="release__desc">
              {randomMovie.overview}
            </p>
            <button className="release__btn">자세히보기</button>
          </div>
        </div>
      </section>
    </>
  );
}
