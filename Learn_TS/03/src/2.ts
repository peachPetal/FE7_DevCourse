{
    // 나만의 커스텀 타입을 만들 수 있는 방법
    // 타입별칭(type alias)

    type Person = {        
        name: string;
        age: number;
        gender: string;
    };
    const user1: Person = {
        name: "kim",
        age: 20,
        gender: "male",
    }
    const user2: Person = {
        name: "park",
        age: 30,
        gender: "male",
    }
    const user3: Person = {
        name: "ann",
        age: 30,
        gender: "male",
    }
}
{
    // 기본 타입 별칭
    type ID = string | number;
    const userId: ID = "teacher-kim";
    const productId: ID = 1;
}
{
    // 객체 타입 별칭
    type User = {
        name: string;
        readonly age? : number;
    };
    type Person = {
        [key: string]: string | number;
    };

    const per1: User = {
        name: "kim",
        age: 20,
    }
    const per2: Person = {
        name: "kim",
        age: 20,
    }
}
{
    // 함수 타입 별칭
    type Func = (a: number, b: number) => number;
    type Func2 = {(a: number, b: number): number};
    const add : Func = (a, b) => a + b;
}
{
    // 튜플 타입 별칭
    type Point = [number, number];
    const point: Point = [10, 20];
}
{
    // 인터섹션 유니온 타입 별칭, 타입 확장
    type StringID = string;
    type NumberID = number;
    type ID = StringID | NumberID;

    type Nameable = {
        name: string;
    }

    type Ageable = {
        age: number;
    }

    type Person = Nameable & Ageable;
}
{
    // 리터럴 타입
    type Direction = "UP" | "LEFT" | "RIGHT" | "DOWN";
    const direct: Direction = "LEFT";
}