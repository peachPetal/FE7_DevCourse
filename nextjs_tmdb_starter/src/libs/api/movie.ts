const url = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWM2NmI4NWQxM2M0Yzk1NzJlYzhlNzQ1NjgwMzY5NSIsIm5iZiI6MTc1ODY5OTc0MC4yMDEsInN1YiI6IjY4ZDNhMGRjY2E3MjdjNzFkMTcxOWIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E-Wm-zl47MgP75RW36u6py-jgjTw5UsPjNLKwSQlJHQ'
  }
};

export const getMovieData = async(path: string, genres?: string) => {
  if(path === "discover/movie"){
    return await(
      await fetch(`${url}/${path}?with_genres=${genres}`, {
        ...options,
        next: {
          revalidate: 60 * 60 * 24,
        },
      })
    ).json();
  }else {
    return await(
        await fetch(`${url}/movie/${path}`, {
            ...options,
            next: {
                revalidate: 60 * 60,
            },
        })
    ).json();
  }
}

// getMovieVideoData
export const getMovieVideoData = async(id: number) => {
  return await(
    await fetch(`${url}/movie/${id}/videos`, {
      ...options,
      next: {
        revalidate: 60 * 60 * 24,
      },
    })
  ).json();
}
// getMovieDetailData
export const getMovieDetailData = async(id: number) => {
  return await(
    await fetch(`${url}/movie/${id}`, {
      ...options,
      next: {
        revalidate: 60 * 60 * 24,
      },
    })
  ).json();
}

export const getMovieCredits = async(id: number) => {
  return await(
    await fetch(`${url}/movie/${id}/credits`, {
      ...options,
      next: {
        revalidate: 60 * 60 * 24,
      },
    })
  ).json();
}

export const getMovieMoreData = async(page: number, type: string, keyword: string) => {
  if(keyword){
    return await(
      await fetch(`${url}/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`, {
        ...options,
        next: {
          revalidate: 60 * 60 * 24,
        },
      })
    ).json();
  } else {
    return await(
      await fetch(`${url}/movie/${type}?page=${page}`, {
        ...options,
      })
    ).json();
  }
}