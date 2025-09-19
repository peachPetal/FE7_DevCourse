import Button from "./components/Button";
import Input from "./components/Input";
import InputWithButton from "./components/InputWithButton";
import CheckBox from "./components/CheckBox";

export default function App() {
  return (
    // <div className="flex flex-col justify-center items-center h-screen gap-[40px] bg-gray-100">
    //   <div className="w-[189px] h-[234px] bg-black flex flex-col justify-center items-center gap-[22px]">
    //     <Button />
    //     <Button label="Delete" bgColor="#ED4848"/>
    //     <Button label="Success" bgColor="#7D48ED"/>
    //   </div>

    //   <Input />

    //   <InputWithButton />

    //   <CheckBox />
    // </div>
    <div className="center">
        <Input type="text" placeholder="Enter Todo List"/>
        <CheckBox type="checkbox">
          <span>
             I agree with <strong>terms</strong> and <strong>policies</strong>.
          </span>
        </CheckBox>
    </div>
  );
}

// 조건부 랜더링
// if문
// 3항 연산자(문자열이나 컴포넌트)
// 논리연산자 &&
// export default function App () {
//   const isLogin = true;
//   // if(isLogin) return <h1>로그인 되었습니다.</h1>;
//   // return <h1>로그인 되지 않았습니다.</h1>;
//   return <h1>{isLogin ? "로그인 되었습니다." : "로그인 되지 않았습니다."}</h1>

// }