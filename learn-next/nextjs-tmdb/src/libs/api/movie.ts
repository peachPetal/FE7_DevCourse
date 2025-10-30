const url = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWM2NmI4NWQxM2M0Yzk1NzJlYzhlNzQ1NjgwMzY5NSIsIm5iZiI6MTc1ODY5OTc0MC4yMDEsInN1YiI6IjY4ZDNhMGRjY2E3MjdjNzFkMTcxOWIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-Wm-zl47MgP75RW36u6py-jgjTw5UsPjNLKwSQlJHQ",
  },
};

export const getMovieData = async (path: string, genres = "") => {
  if (path === "discover/movie") {
    return await (
      await fetch(`${url}/${path}?with_genres=${genres}`, {
        ...options,
        next: {
          revalidate: 60 * 60 * 24,
        },
      })
    ).json();
  } else {
    return await (
      await fetch(`${url}/movie/${path}`, {
        ...options,
        next: {
          revalidate: 60 * 60,
        },
      })
    ).json();
  }
};

export const getMovieVideoData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/videos`, {
      ...options,
      next: {
        revalidate: 60 * 60,
      },
    })
  ).json();
};

export const getMovieDetailData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}`, {
      ...options,
      next: {
        revalidate: 60 * 60 * 24,
      },
    })
  ).json();
};

export const getMovieCreditData = async (id: string) => {
  return await (
    await fetch(`${url}/movie/${id}/credits`, {
      ...options,
      next: {
        revalidate: 60 * 60 * 24,
      },
    })
  ).json();
};

export const getMovieMoreData = async (
  page = 1,
  type = "now_playing",
  keyword = ""
) => {
  console.log(keyword);
  if (keyword) {
    // 검색 API
    console.log(
      `${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`
    );
    return await (
      await fetch(
        `${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`,
        {
          ...options,
          next: {
            revalidate: 60 * 60 * 24,
          },
        }
      )
    ).json();
  } else {
    console.log(`${url}/movie/${type}?page=${page}`);
    // 더보기
    return await (
      await fetch(`${url}/movie/${type}?page=${page}`, {
        ...options,
      })
    ).json();
  }
};
