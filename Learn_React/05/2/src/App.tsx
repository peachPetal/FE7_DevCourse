// JSX 속성 카멜케이스

// import Button from "./components/Button";

export default function App () {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(event);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.currentTarget.style.color = "red";
    console.log(e);
  }
  // const handleClick2 = (name: string) => {
  //   alert(name);
  // };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <button onClick={(e) => handleClick(e)}>클릭!</button>
    </form>
      {/* <button onClick={handleClick()}>클릭</button>
      <button onClick={() => handleClick2("kim")}>클릭</button> */}
      {/* <Button handleClick={handleClick2}/> */}
    </>
  );
}