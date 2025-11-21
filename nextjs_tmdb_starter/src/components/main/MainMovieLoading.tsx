export default function MainMovieLoading({title, subtitle}: {title: string, subtitle: string}) {
  return (

    <>
      <section className="movie">
        <h3 className="movie-category">{title}</h3>
        <h4 className="movie-subtext">
          {subtitle}
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <div className="skeleton-list-item ui0" />
          </div>
        </div>
      </section>
    </>
  );
}
