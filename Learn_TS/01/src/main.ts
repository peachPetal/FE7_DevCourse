// let a: number = 10;
// let b: number = 20;
// let result: number = a + b;
// console.log(result);

// 변수:타입
// 기본 자료형 
// 문자열 
// 숫자
// 논리
// undifined
// null
// symbol
// bigint 
{
    const str: string = "Hello";
    const num: number = 10;
    const bool: boolean = true;
    const undi: undefined = undefined;
    const nul: null = null;
    const sym: symbol = Symbol("a");
    const big: bigint = 100n;

    console.log(typeof str);
    console.log(typeof num);
    console.log(typeof bool);
    console.log(typeof undi);            
    console.log(typeof nul);            
    console.log(typeof sym);            
    console.log(typeof big);            
    // string
    // number
    // boolean
    // undefined
    // object
    // symbol
    // bigint
}
{
    let str: string = "hello";
    str = "A";
    // str = 10;
    // str = true;
    // str = null;
    console.log(str);

    let num: number = 10;
    num = 20;
    // num = "A";
    // num = "null";

    console.log(num);
}

// 참조 자료형
// 배열 
// [] 대괄호, Array<> 제네릭
// 객체
// 함수

{
    const arr: number[] = [];
    arr.push(4);

    // 튜플(tuple)
    const arr1_1: [number, string] = [1, "a"];

    const arr2: Array<number> = [1, 2, 3];
    arr2.push(4);
    //arr.push("b");

    const matrix: number[][] = [
        [1, 2, 3],
        [4, 5, 6],
    ];

    const matrix2: Array<Array<number>> = [
        [1, 2, 3],
        [4, 5, 6],
    ];

    const matrix3: [number[], string[], boolean[]] = [
        [1, 2, 3],
        ["a", "b", "c"],
        [true, false],
    ];

    const blocks: string[][][] = [
        [["a", "b"], ["c"]], 
        [["a", "b"], ["c"]],
    ];

    const blocks2: [[string[], number[]], [string[], number[]]] = [
        [["a", "b"], [1]], 
        [["a", "b"], [2]],
    ];
}

// 객체
{
    const obj: {} = {}; // Recode<string, never>
    const user: {
        name: string;
        age: number;
        gender: string;
        fruits: string[];
        address: {
            zipcode: number;
            details: [string, string, number];
        };
    } = {
        name: "kim",
        age: 20,
        gender: "male",
        fruits: ["apple", "banana"],
        address: {
            zipcode: 111333,
            details: ["서울특별시", "관악구", 11],
        },
    }

    const members: {id: number; name: string}[] = [
        {id: 1, name: "kim"},
        {id: 2, name: "park"},
    ];

    const project: {
        id: string;
        members: {id: number; name:string}[];
    } = {
        id: "p1",
        members,
    };
}