import type { ReactNode } from 'react';

// 1. 문자열을 props로 전달하기
export function ChildWithString ({ str }: { str: string }) {
  return (
    <>
      <h1>{str}</h1>
    </>
  );
}

// 2. 숫자 값을 props로 전달하기
export function ChildWithNumber ({ num }: { num: number }) {
  return (
    <>
      <h1>{num}</h1>
    </>
  );
}

// 3. 배열을 props로 전달하기
export function ChildWithArray ({ arr }: { arr: string[] }) {
  return (
    <>
      <h1>{arr.join(", ")}</h1>
    </>
  );
}

// 4. 객체를 props로 전달하기
interface Obj {
  name: string;
  age: number;
}
export function ChildWithObject ({ name, age }: Obj) {
  return (
    <>
      <h1>이름: {name}</h1>
      <h1>나이: {age}</h1>
    </>
  );
}

// 5. boolean 값을 props로 전달하여 조건 처리하기
export function ChildWithBoolean ({ isLogin }: { isLogin: boolean }) {
  return (
    <>
      <h1>{isLogin ? "로그인 됨" : "로그인 안됨"}</h1>
    </>
  );
}

// 6. 함수를 props로 전달하기
export function ChildWithFunction ({ clickHandler }: { clickHandler: () => void; }) {
  return (
    <button onClick={clickHandler}>
      버튼
    </button>
  );
}

// 7. 기본값을 가진 props 처리하기
interface ChildWithDefaultProps {
  name?: string;
}
export function ChildWithDefault ({ name = "홍길동" }: ChildWithDefaultProps) {
  return (
    <>
      <h1>이름: {name}</h1>
    </>
  );
}

// 8. props로 스타일 전달하여 출력하기
interface StyleProps {
  style: {
    fontSize: string;
    color: string;
  };
}

export function ChildWithStyle({ style }: StyleProps) {
  return (
    <h1 style={style}>스타일이 적용된 텍스트</h1>
  );
}

// 9. props로 여러 자식 컴포넌트를 전달하기
interface ChildrenProps {
  children: ReactNode;
}

export function ChildWithChildren({ children }: ChildrenProps) {
  return (
    <>{children}</>
  );
}