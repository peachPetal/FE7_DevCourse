export const movieRuntime = (runtime: number) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;
    return `${hour > 0 ? `${hour}h ${minute}m` : `${minute}m`}`;
};

export function getTitle(type:string, keyword?: string){
    switch(type){
    case "now_playing":
      return "현재 상영중인 영화";
    case "upcoming":
      return "개봉예정 영화";
    case "popular":
      return "인기있는 영화";
    case "search":
      return `${keyword} 검색 결과`;
    }
}