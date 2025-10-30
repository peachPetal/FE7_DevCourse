export default function MovieLoader({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <>
      <section className="movie">
        <h3 className="movie-category">{subTitle}</h3>
        <h4 className="movie-subtext">{title}</h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <div className="skeleton-list-item ui0"></div>
          </div>
        </div>
      </section>
    </>
  );
}
