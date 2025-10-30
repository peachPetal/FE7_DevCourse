// 이벤트
// JSX 특징 -> 속성은 카멜케이스로 작성한다.
// 이벤트 객체

// import Button from "./components/Button";

export default function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.style.color = "red";
    console.log(e); // 명시적으로 전달해서 사용해라.
    console.log(event); // 사용하면 안됨
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const handleClick2 = () => {
  //   alert("hello");
  // };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={(e) => handleClick(e)}>클릭</button>
      </form>
      {/* <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleClick("kim")}>클릭</button> */}
      {/* <Button handleClick={handleClick} handleClick2={handleClick2} /> */}
    </>
  );
}
