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
        <Suspense fallback={<ListMovieLoader/>}>
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

// <h4 className="movie-subtext">현재 상영중인 영화</h4>
// <div className="movie-list">
//   <div className="movie-list__item">
//     <a href="#" className="skeleton-list-item ui0"></a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <p className="movie-list__desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptatibus dolore alias quas porro voluptas debitis
//           repudiandae similique odio corporis magnam ipsam ex fugit
//           eligendi autem, officiis, culpa dolorem laborum adipisci.
//         </p>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <p className="movie-list__desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptatibus dolore alias quas porro voluptas debitis
//           repudiandae similique odio corporis magnam ipsam ex fugit
//           eligendi autem, officiis, culpa dolorem laborum adipisci.
//         </p>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <p className="movie-list__desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptatibus dolore alias quas porro voluptas debitis
//           repudiandae similique odio corporis magnam ipsam ex fugit
//           eligendi autem, officiis, culpa dolorem laborum adipisci.
//         </p>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <p className="movie-list__desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptatibus dolore alias quas porro voluptas debitis
//           repudiandae similique odio corporis magnam ipsam ex fugit
//           eligendi autem, officiis, culpa dolorem laborum adipisci.
//         </p>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
//   <div className="movie-list__item">
//     <a href="#">
//       <figure>
//         <Image
//           src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
//           alt=""
//           fill
//           sizes="228px"
//         />
//       </figure>
//       <div className="movie-list__txt">
//         <div className="progress-circle p50">
//           <span>10%</span>
//           <div className="left-half-clipper">
//             <div className="first50-bar"></div>
//             <div className="value-bar"></div>
//           </div>
//         </div>
//         <strong className="movie-list__title">Civil War</strong>
//         <p className="movie-list__desc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Voluptatibus dolore alias quas porro voluptas debitis
//           repudiandae similique odio corporis magnam ipsam ex fugit
//           eligendi autem, officiis, culpa dolorem laborum adipisci.
//         </p>
//         <span className="movie-list__release">
//           2023.11.21 / 평점 7.3
//         </span>
//       </div>
//     </a>
//   </div>
// </div>
