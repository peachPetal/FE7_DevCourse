// 리액트에서 상태(state)
// 컴포넌트 내부에서 변경 가능한 데이터
// 사용자 입력, 서버 응답, UI 상호작용 등으로 값이 변경될 수 있다.
// 값이 변경되면 컴포넌트가 자동으로 다시 랜더링되어 화면에 새로운 값이 반영됨

import { use, useRef, useState } from "react";
import Input from "./components/Input";

// 리액트 훅(16.8)
// 함수형 컴포넌트에서도 상태(state)나 생명주기(lifecycle) 같은 리액트 기능을 
// 사용할 수 있게 해주는 특별한 함수
// useState(), useRef(), useReduver(), useEffect()

// export default function App () {
//   const [user, setUser] = useState({name: "kim", age: 20}) // 상태 변수, 상태 업데이트 함수
//   //const [count, setCount] = useState(0);
//   const handleUpdate = () => {
//   // 상태업데이트함수(value) -> 변경하는 상태 값이 이전 상태와 상관이 없다면'
//   // setCount(10);
//   // setUser({
//   //   name: "park",
//   //   age: 30,
//   // });
//   // 상태업데이트함수(callBack) -> 변경하는 상태 값이 이전 상태와 상관이 있다면
//   // setCount((count) => count + 1);
//   setUser((user) => ({...user, age: 40}));
//   };
//   return (
//     <>
//       <h1>Name: {user.name}</h1>
//       <h1>Age: {user.age}</h1>
//       <button onClick={handleUpdate}>클릭</button>
//     </>
//   );
// }


// useState + form
// onChange -> onInput + onChange
// export default function App () {
//   const [text, setText] = useState("banana");
//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setText(e.target.value);
//   }
//   return (
//     <>
//       <h1>{text}</h1>
//       {/* <textarea onChange={handleChange} placeholder="email을 입력해주세요"/> */}
//       <select onChange={handleChange} value={text}>
//         <option value="apple">apple</option>
//         <option value="banana">banana</option>
//         <option value="orange">orange</option>
//       </select>
//     </>
//   );
// }

// export default function App () {
//   const [value, setValue] = useState(true);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.checked);
//   }
//   return (
//     <>
//       <pre>{value ? "동의함" : "동의하지 않음"}</pre>
//       <div>
//         <label htmlFor="chk">
//           <input type="checkbox" onChange={handleChange}/>
//           이용약관에 동의합니다
//         </label>
//       </div>
//     </>
//   );
// }

// export default function App () {
//   const [value, setValue] = useState("남자");
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <pre>{value}</pre>
//       <div>
//           <input type="radio" name="gender" value="남자" defaultChecked onChange={handleChange}/> 남자
//       </div>
//       <div>
//           <input type="radio" name="gender" value="여자" onChange={handleChange}/> 여자
//       </div>
//     </>
//   );
// }

// useRef()
// current 속성 객체 반환
// 폼 요소 제어
// 제어/비제어 컨트롤러 방시
// 제어 : 입력값이 리액트의 상태의 의해서 제어 / useState + onChange
// 비제어 : 입력값이 DOM 자체에서 관리 / useRef + current

// export default function App () {
//   const ref = useRef<HTMLInputElement>(null); 
//   const checkboxRef = useRef<HTMLInputElement>(null); 
//   const maleRef = useRef<HTMLInputElement>(null);
//   const femaleRef = useRef<HTMLInputElement>(null);
//   const textRef = useRef<HTMLTextAreaElement>(null);
//   const selectRef = useRef<HTMLSelectElement>(null);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // const inputValue = ref.current?.value;
//     console.log(ref.current?.value);
//     console.log(checkboxRef.current?.checked);

//     if(maleRef?.current?.checked) console.log("남성");
//     else if(femaleRef?.current?.checked) console.log("여성");
//     else console.log("선택된 값 없음");

//     console.log(textRef.current?.value);
//     console.log(selectRef.current?.value);
//   }
//   // const handleClick = () => {
//   //   console.log(ref);
//   //   if(ref.current){
//   //     ref.current.style.color = "red";
//   //   }
//   // }
//   return (
//     <>
//       {/* <h1 ref={ref}>App Component</h1>
//       <button onClick={handleClick}>클릭</button> */}

//       <form onSubmit={handleSubmit}>
//         <select ref={selectRef}>
//           <option value="apple">apple</option>
//           <option value="banana">banana</option>
//           <option value="orange">orange</option>
//         </select>
//         <textarea ref={textRef}></textarea>
//         <input type="color" ref={ref}/>
//         <input type="checkbox" ref={checkboxRef}/>
//         <input type="radio" ref={maleRef}/>남자
//         <input type="radio" ref={femaleRef}/>여자
//         <button type="submit">전송</button>
//       </form>
//     </>
//   );
// }

export default function App () {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, pw);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="이메일 입력" value={email} setValue={setEmail}/>
        <Input type="password" placeholder="비밀번호 입력" value={pw} setValue={setPw}/>
        <button>로그인</button>
      </form>
    </>
  );
}