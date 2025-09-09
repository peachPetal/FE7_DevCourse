// 문제 1
{
    // 함수 정의
    const add = (a: number, b: number): number => a + b;

    // 함수 호출
    const result = add(10, 5);
    console.log(result); // 15
}

// 문제 2
{
    // 함수 정의
    const greet = (name: string): string => `Hello, ${name}`;

    // 함수 호출
    const greeting = greet('Alice');
    console.log(greeting);
}

// 문제 3
{
    // 함수 정의
    const sumAll = (...numArr: number[]): number => numArr.reduce((acc, cur) => acc + cur, 0);

    // 함수 호출
    const total = sumAll(1, 2, 3, 4);
    console.log(total);
}

// 문제 4
{
    // 함수 정의
    const sum = (a: number, b: number = 0): number => a + b;

    // 함수 호출
    const result = sum(5);
    console.log(result);
}

// 문제 5
{
    // 함수 정의
    const multiply = (a: number, b: number): number => a * b;

    // 함수 호출
    const product = multiply(4, 5);
    console.log(product);
}

// 문제 6
{
    // 함수 정의
    const concatStringAndNumber = (a: string, b: number): string => a + b;

    // 함수 호출
    const result = concatStringAndNumber("Hello", 10);
    console.log(result);
}

// 문제 7
{
    // 함수 정의
    const greet = (name: string, message?: string): string => (message || "Welcome") + ", " + name; 

    // 함수 호출
    const greeting1 = greet("Alice", "Hello");
    const greeting2 = greet("Bob");
    console.log(greeting1); // "Hello, Alice!"
    console.log(greeting2); // "Welcome, Bob!"
}

// 문제 8
{
    // 함수 정의
    const findMax = (numArr: number[]): number => Math.max(...numArr);

    // 함수 호출
    const max = findMax([10, 20, 30, 40]);
    console.log(max); // 40   
}

// 문제 9
{
    // 함수 정의
    const double = (num: number): number => num * 2;

    // 함수 호출
    const doubled = double(10);
    console.log(doubled); // 20  
}

// ### **문제 10: 함수 오버로딩**

// `getInfo` 함수는 문자열을 인자로 받을 때는 `"Name: {name}"`, 숫자를 인자로 받을 때는 `"Age: {age}"` 형태로 출력해야 합니다. 
// 함수 오버로딩을 사용하여 이 기능을 구현하고, 각 타입의 인자를 넘겨 호출해보세요.

// ```tsx

{
    // 함수 오버로딩
    function getInfo(param: string): string;
    function getInfo(param: number): string;

    // 실제 구현부
    function getInfo(param: string | number): string {
        if (typeof param === "string") {
            return `Name: ${param}`;
        } else {
            return `Age: ${param}`;
        }
    }

    // 함수 호출
    const info1 = getInfo("Alice");
    const info2 = getInfo(30);

    console.log(info1);
    console.log(info2);
}
// ```