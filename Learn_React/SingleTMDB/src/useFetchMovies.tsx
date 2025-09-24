// // src/hooks/useFetchMovies.js
// import { useState, useEffect } from "react";
// import axios from "axios";

// export function useFetchMovies() {
//   const [data, setData] = useState({
//     nowPlaying: null,
//     upcoming: null,
//     popular: null,
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     const fetchMovies = async () => {
//       setLoading(true);
//       try {
//         const apiKey = import.meta.env.VITE_TMDB_KEY
//         const [nowPlayingRes, upcomingRes, popularRes] = await Promise.all([
//           axios.get("https://api.themoviedb.org/3/movie/now_playing", {
//             params: { api_key: apiKey },
//             cancelToken: source.token,
//           }),
//           axios.get("https://api.themoviedb.org/3/movie/upcoming", {
//             params: { api_key: apiKey },
//             cancelToken: source.token,
//           }),
//           axios.get("https://api.themoviedb.org/3/movie/popular", {
//             params: { api_key: apiKey },
//             cancelToken: source.token,
//           }),
//         ]);

//         setData({
//           nowPlaying: nowPlayingRes.data.results,
//           upcoming: upcomingRes.data.results,
//           popular: popularRes.data.results,
//         });
//       } catch (err) {
//         setError(err instanceof Error ? err : new Error("Unknown error"));
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMovies();

//     return () => source.cancel("Component unmounted");
//   }, []);

//   return { data, loading, error };
// }

// src/hooks/useFetchMovies.tsx

import { useState, useEffect } from "react";
import axios from "axios";

// Movie 데이터 타입 정의 (만약 없다면 추가해주세요)
interface Movie {
  id: number;
  title: string;
  // ... 필요한 다른 속성들
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
      // ====================[여기 주목!]====================
      // API 키가 제대로 읽히는지 콘솔에서 직접 확인합니다.
      const apiKey = import.meta.env.VITE_TMDB_KEY;
      console.log("VITE 환경 변수에서 읽어온 API 키:", apiKey);
      // ====================================================

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