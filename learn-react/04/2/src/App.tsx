import Button from "./components/Button";
import Buttons from "./components/Buttons";

export default function App() {
  const clickHandler = () => console.log("결제!");
  return (
    <>
      <Button onClick={clickHandler}>결제하기</Button>
      <Buttons text="등록하기" />
    </>
  );
}
