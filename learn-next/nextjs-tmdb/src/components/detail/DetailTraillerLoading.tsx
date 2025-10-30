export default function DetailTraillerLoading() {
  return (
    <>
      <section className="trailer">
        <iframe
          className="skeleton-list-item"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: 0,
            width: "90%",
            maxWidth: "900px",
            aspectRatio: "16 / 9",
          }}
        ></iframe>
      </section>
    </>
  );
}
