{
    // 선언 병합
    interface User{
        name: string;
    }

    interface User{
        age: number;
    }

    // enum
    enum Direction{
        UP, // 0
        DOWN, // 1
    }

    enum Direction{
        RIGHT = 2,
        LEFT, // 3
    }

    Direction.LEFT;
}
{
    // 조건부 타입
    // T extends U ? X : Y
    type IsString<T> = T extends string ? "Yes" : "No";
    type A = IsString<string>; // "Yes"
    type B = IsString<number>; // "No"
}
{
    // 
    type MyType = "a" | "b" | "c";
    type Result = Exclude<MyType, "b">; 
}
{
    type MyExclude<T, U> = T extends U ? never : T;
    type MyType = "a" | "b" | "c";
    type Result = Exclude<MyType, "b">; 
}

