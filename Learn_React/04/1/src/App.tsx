import { ProfileCard } from "./components/ProfileCard";
// import User from "./components/User";
// import Profile from "./components/Profile";
// import {
//   ChildWithString,
//   ChildWithNumber,
//   ChildWithArray,
//   ChildWithObject,
//   ChildWithBoolean,
//   ChildWithFunction,
//   ChildWithDefault,
//   ChildWithStyle,
//   ChildWithChildren
// } from './components/child';

export default function App () {
  const clickHandler = () => {
    console.log("Click!");
  }
  const onFollowClick = () => {
    console.log("Follow!");
  }
  // const userObj = {
  //   name: "kim",
  //   age: 30,
  // }
  return (
    <>
      {/* <User userObj={userObj} clickHandler = {clickHandler}/> */}
      {/* <Profile /> */}
      {/* <h2>1. 문자열 Props</h2>
      <ChildWithString str={"Hello, World!"} />
      <hr />

      <h2>2. 숫자 Props</h2>
      <ChildWithNumber num={42} />
      <hr />

      <h2>3. 배열 Props</h2>
      <ChildWithArray arr={["Apple", "Banana", "Cherry"]} />
      <hr />

      <h2>4. 객체 Props</h2>
      <ChildWithObject {...{ name: "Alice", age: 30 }} />
      <hr />

      <h2>5. 불리언 Props</h2>
      <ChildWithBoolean val={true} />
      <hr />

      <h2>6. 함수 Props</h2>
      <ChildWithFunction clickHandler={clickHandler} />
      <hr />

      <h2>7. 기본값 Props</h2>
      <ChildWithDefault />
      <hr />

      <h2>8. 스타일 Props</h2>
      <ChildWithStyle style={{ fontSize: "50px", color: "red" }} />
      <hr />

      <h2>9. Children Props</h2>
      <ChildWithChildren>
        <h3>자식 컴포넌트 1</h3>
        <h3>자식 컴포넌트 2</h3>
      </ChildWithChildren> */}
      <ProfileCard
        backgroundImage="https://cdn.pixabay.com/photo/2022/05/12/17/06/hamburger-7191902_640.jpg"
        userImage="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userName="Sally Ramos"
        userInstagramId="sallytheramos"
        onFollowClick={onFollowClick}
      />
    </>
  );
}