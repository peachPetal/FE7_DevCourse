import { star } from "../assets/movies/assets";
import { format } from 'date-fns';

interface Movie {
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

interface MovieListItemProps {
  movie: Movie;
}

export default function MovieListItem({ movie }: MovieListItemProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseInfo = movie.release_date
    ? format(new Date(movie.release_date), 'yyyy.MM.dd')
    : "N/A";
  return (
    <div>
      <img
        src={imageUrl}
        alt={movie.title}
        className="rounded-md w-full h-auto object-cover"
      />
      <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
        <h4 className="line-clamp-1">{movie.title}</h4>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-200">
        <div className="flex items-center gap-2 font-bold">
          <img
            src={star}
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
          <span className="text-yellow-500">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
        <span className="text-yellow-500 font-bold">{releaseInfo}</span>
      </div>
    </div>
  );
}