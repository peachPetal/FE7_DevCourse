{
  // 1
  const add: (n1: number, n2: number) => number = (n1, n2) => n1 + n2;
  const result = add(10, 5);
  console.log(result); // 15

  // 2
  const greet = (name: string): void => {
    console.log(`Hello, ${name}`);
  };
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"

  // 3
  function sumAll(...numArr: number[]): number {
    let sum = 0;
    for (let n of numArr) {
      sum += n;
    }
    return sum;
  }
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}
{
  // 4
  const sum: (a: number, b?: number) => number = (a, b = 0) => a + b;
  const result = sum(5);
  console.log(result); // 5
}
{
  // 5
  function multiply(a: number, b: number): number {
    return a * b;
  }
  const product = multiply(4, 5);
  console.log(product); // 20
}
{
  // 6
  // const concatStringAndNumber = (a: string, b: number): string => `${a}${b}`;
  const concatStringAndNumber: (a: string, b: number) => string = (a, b) =>
    `${a}${b}`;
  const result = concatStringAndNumber("Hello", 10);
  console.log(result); // "Hello10"
}
{
  // 7
  // 함수 정의
  const greet: (name: string, message?: string) => string = (
    name,
    message = "Welcome"
  ) => `${message}, ${name}`;
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}
{
  // 8
  // 함수 정의
  function findMax(numArr: number[]): number {
    return Math.max(...numArr);
  }

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}
{
  // 9
  const double = function (x: number) {
    return x * 2;
  };
  const doubled = double(10);
  console.log(doubled); // 20
}
