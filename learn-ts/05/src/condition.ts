{
  // 선언 병합
  interface User {
    name: string;
  }
  interface User {
    age: number;
  }

  // enum
  enum Direction {
    UP, // 0
    DOWN, // 1
  }
  enum Direction {
    RIGHT = 2, // 0
    LEFT = 3, // 1
  }

  Direction.LEFT;
}
{
  // 조건부 타입 (삼항 연산자와 비슷함)
  // T extends U ? X : Y
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<string>; // "Yes"
  type B = IsString<number>; // "No"
}
{
  type MyType = "a" | "b" | "c";
  type Result = Exclude<MyType, "b">; // "a" | "c"
}
{
  //type Exclude<"a" | "b" | "c", "b"> = "a" | "b" | "c" extends "b" ? never : T;
  // | "a" extends "b" ? never : T  -> T
  // | "b" extends "b" ? never : T  -> never
  // | "c" extends "b" ? never : T  -> T

  // "a" |  "c"
  type Exclude<T, U> = T extends U ? never : T;
  type MyType = "a" | "b" | "c";
  type Result = Exclude<MyType, "b">; // "a" | "c"
}
