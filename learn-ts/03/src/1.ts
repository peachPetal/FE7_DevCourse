{
  // 구조적 타이핑
  // 타입의 이름이나 선언이 아니라, 내부의 구조가 같으면 같은 타입으로 간주하는 방식
  const point: { x: number; y: number; z: number } = { x: 10, y: 20, z: 30 };
  const position: { x: number; y: number } = point;

  const fn1: (a: number, b: number) => number = (a, b) => a + b;
  const fn2: (x: number, y: number) => number = fn1;
}
{
  // readonly
  const user: {
    readonly name: string;
    readonly age?: number;
  } = {
    name: "kim",
  };

  const numArr: readonly number[] = [1, 2, 3];
  const mixArr: readonly [number, string] = [10, "A"];
}
{
  // 인덱스 시그니처
  // 객체의 키와 값의 타입 패턴을 통해 타입을 정의하는 문법
  const user: {
    [key: string]:
      | string
      | number
      | ({ address: string } & { zipcode: string })
      | ((a: number, b: number) => number);
  } = {
    0: "kim",
    age: 20,
    obj: {
      address: "dd",
      zipcode: "ddd",
    },
    sum: (a: number, b: number) => a + b,
  };
}
{
  // 함수 -> 일급 객체
  const add: {
    (a: number, b: number): number;
  } = (a, b) => a + b;

  const adds: (a: number, b: number) => number = (a, b) => a + b;
}
