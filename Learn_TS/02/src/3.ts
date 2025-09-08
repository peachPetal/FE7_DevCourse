{
    // 1. 타입 오퍼레이터
    // 유니언 타입 -> |(파이프)
    // A or B

    // 타입가드(type guard)
    // 런타임에 실제 검사 결과를 바탕으로 변수의 타입을 조금 더 좁게 추론하도록 타입스크립트에 힌트를 주는 문법
    let x: number | string | boolean = 10;
    x = 20;
    x = "A";
    x = true;

    const arr1: (string | number)[] = ["A", 10];
    const first = arr1[0];
    //first.toLowerCase();
    if(typeof first === "string"){
        console.log(first.toLowerCase());
    }

    const second = arr1[1];
    
    const arr2: [string, number] = ["A", 10];
    const f = arr2[0];
    const s = arr2[1];
    f.toLowerCase();
    s.toFixed(0);

    // 인터섹션 타입 -> &(앰퍼샌드)
    // A and B
    const user: {name: string} & {age: number} ={
        name:"kim",
        age: 20,
    };
    const user2 : {name: string; age: number} = {
        name: "kim",
        age: 20,
    };
}