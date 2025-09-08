// 함수에 타입을 지정하는 방법
// 함수의 매개 변수와 반환 값의 타입을 지정하는 것
// function(n1: 매개변수 타입, n2: 매개변수 타입): 반환 값의 타입 {}
{
    // 함수 표현식
    // 1. 함수 표현식에 타입을 지정하는 방법 
    function sum(n1: number, n2: number): number{
        return n1 + n2;
    }

    sum(10, 20);

    // 2. 변수에 함수 타입을 지정하는 방법
    const sum2 : (n1: number, n2: number) => number = function sum(n1, n2){
        return n1 + n2;
    }

    // 3. 변수와 함수 표현식 모두에 타입을 지정하는 방법
    const sum3 : (n1: number, n2: number) => number = function sum(n1: number, n2: number): number{
        return n1 + n2;
    }

    // 화살표 함수
    // 1. 표현식에 타입 지정
    const sum4 = (n1: number, n2: number): number => {
        return n1 + n2;
    }
    // 2. 변수에 타입 지정
    const sum5 : (n1: number, n2: number) => number = (n1, n2) => {
        return n1 + n2;
    } 
    // 3. 둘 다 지정
    const sum6 : (n1: number, n2: number) => number = (
        n1: number,
        n2: number
    ): number => n1 + n2;

    // 옵셔널 매개변수

    function concat(str1: string, str2: string) {
        return str1 + str2; // string
    }

    concat("Hello", " World!");

    function printValue(value: string): void{
        console.log(value);
        // return undefined
    }

    printValue("Hello");

    function throwError(msg: string): never{
        throw new Error(msg);
    }


}
{
    // 옵셔널 파라미터
    function sum(n1: number, n2?: number): number {
        return n1 + (n2 || 0);
    }

    sum(10);
    sum(10, 20);
}
{
    // 함수 오버로딩
    // 오버로드 시그니처를 활용해서 매개변수와 반환값의 경우의 수를 줄이는 방법
    function sum(a: string, b: number): string;
    function sum(a: string, b: string): string;
    function sum(a: number, b: string): string;
    function sum(a: number, b: number): number;
    function sum(a: number | string, b: number | string): number | string{
        if(typeof a === "number" && typeof b === "number") return a + b;
        // else if(typeof a === "string" && typeof b === "string") return a + b;
        // else if(typeof a === "number" && typeof b === "string") return a + b;
        // else if(typeof a === "string" && typeof b === "number") return a + b;
        else return `${a}${b}`;
    }

    const num = sum(10, 20);
    console.log(num);
    console.log(typeof num);
    // if(typeof num === "number") console.log(num.toFixed(2));
    const str = sum(
        "A", 10
    );
}