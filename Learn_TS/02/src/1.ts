// 타입 추론
// 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입추론
// 참조자료형 -> 타입명시

import { NumberLiteralType } from "typescript";

// 리터럴 타입(Literal Type)
// 값으로 타입을 지정하는 방식, 정확히 그 값 하나만 가질 수 있는 타입
{
    let str2: string = "Hello";
    str2 = "a";
    str2 = "b";

    const str3: "Hello" = "Hello";
    //str3 = "a";

    let str = "Hello";
    //str = 10;
    str = "A";
    console.log(str);
    let num = 10;
    let bool = true;
    let undi = undefined;
    let nul = null;
    let sym = Symbol("a");
    let big = 100n;

    // TODO: 나중에 타입 지정하기
    let a: any; // 타입 검사 하지 않음
    a = "A";
    a = 10;
}
{
    let arr = [1, 2, 3, 4];
    let obj: {
        name: string;
        age: number;
    } = {
        name: "kim",
        age: 20,
    };
    let func = function() {};
}
{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((json : {
            userId: number;
            id: number;
            title: string;
            completed: boolean;
        }) => {
        console.log(json);
        console.log(json.title) 
    });
}