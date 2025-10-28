import { useState, useEffect } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
}

export function useFetchMovies() {
  const [data, setData] = useState<{
    nowPlaying: Movie[] | null;
    upcoming: Movie[] | null;
    popular: Movie[] | null;
  }>({
    nowPlaying: null,
    upcoming: null,
    popular: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchMovies = async () => {
      const apiKey = import.meta.env.VITE_TMDB_KEY;
      console.log("VITE 환경 변수에서 읽어온 API 키:", apiKey);

      setLoading(true);
      try {
        const [nowPlayingRes, upcomingRes, popularRes] = await Promise.all([
          axios.get("https://api.themoviedb.org/3/movie/now_playing", {
            params: { api_key: apiKey },
            cancelToken: source.token,
          }),
          axios.get("https://api.themoviedb.org/3/movie/upcoming", {
            params: { api_key: apiKey },
            cancelToken: source.token,
          }),
          axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: { api_key: apiKey },
            cancelToken: source.token,
          }),
        ]);

        setData({
          nowPlaying: nowPlayingRes.data.results,
          upcoming: upcomingRes.data.results,
          popular: popularRes.data.results,
        });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

    return () => source.cancel("Component unmounted");
  }, []);

  return { data, loading, error };
}