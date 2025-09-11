// 1. 배열 합계 계산 함수 개선
{
    function sumArray<T extends number | string>(arr: T[]): T extends number ? number : string {
        if (arr.length === 0) return (typeof arr[0] === "number" ? 0 : "") as any;
        if (typeof arr[0] === "number") {
            return (arr as number[]).reduce((acc, curr) => acc + curr, 0) as any;
        } else {
            return (arr as string[]).reduce((acc, curr) => acc + curr, "") as any;
        }
    }

    console.log(sumArray([1, 2, 3])); // 6
    console.log(sumArray(["a", "b", "c"])); // "abc"
}

// 2. 배열 반전 함수 개선
{
    function reverseArray<T>(arr: T[]): T[] {
        return [...arr].reverse();
    }

    console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
    console.log(reverseArray(["a", "b", "c"])); // ["c", "b", "a"]
}

// 3. 배열 타입을 이용한 중복 제거 함수 개선
{
    function removeDuplicates<T>(arr: T[]): T[] {
        return Array.from(new Set(arr));
    }

    console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
    console.log(removeDuplicates(["a", "b", "a"])); // ["a", "b"]
    console.log(removeDuplicates([true, false, true])); // [true, false]
}

// 4. 기본값을 설정하는 함수 개선
{
    function setDefault<T extends {name: string, age: number}>(obj: T): T {
        return { ...obj, age: obj.age || 18 };
    }

    console.log(setDefault({ name: "Alice", age: 0 })); // { name: "Alice", age: 18 }
}

// 5. 제네릭을 사용한 키 값 검증 함수
{
    function hasKey<T extends object>(obj: T, key: keyof T): boolean {
        return key in obj;
    }

    const person = { name: "Alice", age: 30 };
    console.log(hasKey(person, "name")); // true
    console.log(hasKey(person, "age")); // false
}
// 6. 제네릭을 활용한 타입 변환 함수
{
    function convertToString<T>(arr: T[]): string[] {
        return arr.map(item => String(item));
    }

    console.log(convertToString([1, 2, 3])); // ["1", "2", "3"]
    console.log(convertToString([true, false])); // ["true", "false"]
}

// 7. 타입 안전한 객체 병합 함수
{
    function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
        return { ...obj1, ...obj2 };
    }

    const obj1 = { name: "John" };
    const obj2 = { age: 25 };
    console.log(mergeObjects(obj1, obj2)); // { name: "John", age: 25 }
}

// 8. 값 검증 함수 개선
{
    function isPositive<T>(value: T, predicate: (v: T) => boolean): boolean {
        return predicate(value);
    }

    console.log(isPositive(10, num => num > 0)); // true
    console.log(isPositive("hello", str => str.length > 3)); // true
    console.log(isPositive([1, 2], arr => arr.length === 2)); // true
}