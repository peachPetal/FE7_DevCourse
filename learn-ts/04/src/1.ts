{
  // TODO: 나중에 타입 교체
  // any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
  // unknown - 알 수 없는 타입 (안전한 any, 유연한 any)
  let x: unknown;
  x = 10.12;

  // 타입 좁히기 필요
  if (typeof x === "number") {
    console.log(x.toFixed(2));
  }
}
{
  // 타입 단언
  // as, <>
  // 개발자가 타입스크립트 컴파일러보다 타입을 더 잘 알고 있을 때 사용합니다.
  // 타입을 내가 정의하겠다. 내가 보장하겠다.
  let x: unknown;
  x = "A";

  // 장점 -> 타입을 내가 원한는대로 지정할 수 있음
  // 단점 -> 책임은 개발자가 가져가야함
  (x as number).toFixed(1);
  (<number>x).toFixed(1); // 리액트 안씀, JSX문법과 충돌남

  (x as { name: string }).name;

  const el = document.querySelector("#user") as Element;
  el.addEventListener("click", function () {});
}
