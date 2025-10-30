export default function PublicImg() {
  return (
    <>
      <h1>PublicImg</h1>
      <img src="/images/light.jpg" style={{ width: "100%" }} />
      <div className="bg"></div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: `url('/images/light.jpg') no-repeat center`,
        }}
      ></div>
    </>
  );
}
