// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 타양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.
// T = type(가장 일반적인 타입 변수)
// K = key 객체의 키
// V = value 객체의 값
// E = elem 객체의 요소
// U = another type (T 이외의 만만하면 U)
{
    // 함수의 제네릭

    // ! 널 아님 보장 연산자
    function getFirstElement<T>(arr: T[]): T{
        return arr[0]!;
    }

    const a = getFirstElement([1, 2, 3]);

    console.log(getFirstElement<number>([1, 2, 3]));
    console.log(getFirstElement<string>(["A", "B", "C"]));
    console.log(getFirstElement<boolean>([true, false]));
    console.log(getFirstElement<number | string>([1, "A"]));
}

{
    // 제네릭도 타입 추론이 됨
    // 타입 명시가 필요하지 않으면, 타입 추론을 활용하는 것을 권장
    function identity<T>(value: T): T{
        return value;
    }

    const num = identity(42);
    const str = identity<string>("A");
    const bool = identity<boolean>(true);
}
{
    function logArray<T>(arr: T[]): void{
        arr.forEach((value) => console.log(value));
    }

    logArray([1, 2, 3]);
    logArray(["a", "b", "c"]);
}
{
    function mergeObj<T, U>(obj1: T, obj2: U): T & U{
        return {...obj1, ...obj2};
    }
    const mer1 = mergeObj({name: "kim"}, {age: 20});
    const mer2 = mergeObj({name: "kim", age: 20}, {gender: "male"});
}
{
    function makeTuple<T, K, V>(a: T, b: K, c: V): [T, K, V]{
        return [a, b, c];
    }
    const numTuple = makeTuple(1, 2, 3);
    const strTuple = makeTuple("a", "b", "c");
    const mixTuple = makeTuple(1, "a", true);
}
{
    // 타입 제약
    // 제네릭의 타입을 제한
    // T extends U
    function sumArray<T extends number>(arr: T[]): number{
        return arr.reduce((acc, cur) => acc + cur, 0);
    }

    sumArray([1, 2, 3]);
    //sumArray(["a", "b"]);
}
{
    function returnLength<T extends {length: number}>(arr: T[]): number{
        return arr.length;
    }
    //returnLength([1, 2, 3]);
    returnLength(["a", "b", "c"]);
}
{
    function logKey<T extends {name: string, age: number}>(obj: T): void{
        console.log(`${obj.name}, ${obj.age}`);
    }

    logKey({name: "kim", age: 20});
}
{
    // 인터페이스의 제네릭
    interface Box<T extends number | string>{
        value: T;
        getValue(): T;
    }

    const stringBox: Box<string> = {
        value: "kim",
        getValue() {
            return this.value;
        },
    };

    const numberBox: Box<number> = {
        value: 10,
        getValue() {
            return this.value;
        },
    };
}

{
    class Box<T extends {id: number}>{
        private items: T[] = [];
        add(item: T){
            this.items.push(item);
        }
        getAll(): T[]{
            return this.items;
        }
    }
    const stringBox = new Box<{id: number; name: string}>();
    // stringBox.add("A"); 
    // stringBox.add("B"); 
    // stringBox.add("C");
    stringBox.add({id: 1, name: "kim"});
    console.log(stringBox.getAll()); 
}