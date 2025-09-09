// 1. 유니언 타입 사용하기: 값 출력하기
{
    const printValue = (param: string | number): void => {
        console.log(param);
    }

    printValue("Hello"); // "Hello" 출력
    printValue(42);       // 42 출력
}

// 2. 유니언 타입을 사용한 조건 처리
{
    const doubleOrLength = (input: string | number): number => {
        return typeof input === "string" ? input.length : input * 2;
    }

    console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
    console.log(doubleOrLength(10));      // 20 (숫자 10의 두 배)
}

// 3. 인터섹션 타입 사용하기: 객체 합치기
{
    type Person = {name: string; age: number};
    type Employee = {jobTitle: string; salary: number}; 
    const mergeObjects = (p: Person, e: Employee): Person & Employee => {
        return {...p, ...e};
    }

    const person = { name: "Alice", age: 30 };
    const employee = { jobTitle: "Engineer", salary: 5000 };

    const mergedObject = mergeObjects(person, employee);
    console.log(mergedObject);
    // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }    
}

// 4. 유니언 타입을 사용한 배열 처리
{
    const getFirstElement = (arr: number[] | string[]): number | string => arr[0];

    console.log(getFirstElement([1, 2, 3])); // 1
    console.log(getFirstElement(["a", "b", "c"])); // "a"
    console.log(getFirstElement([])); // undefined
}

// 5. 유니언 타입을 사용한 값 비교
{
    const isEqual = (a: string | number, b: string | number): boolean => a === b;

    console.log(isEqual(10, 10)); // true
    console.log(isEqual("hello", "world")); // false
    console.log(isEqual(5, "5")); // false    
}

// 6. 인터섹션 타입을 활용한 필드 업데이트
{
    type Obj = {name: string, age: number};
    const updateAddress = (obj: Obj, address?: string): Obj & {address?: string} => {
        return address ? { ...obj, address } : { ...obj };
    }

    const updatedPerson = updateAddress({ name: "Jane", age: 28 }, "123 Maple St");
    console.log(updatedPerson);
    // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

    const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
    console.log(updatedPersonWithoutAddress);
    // 예상 출력: { name: "John", age: 22 }   
}

// 7. 유니언 타입을 사용한 함수 반환 타입
{
    const maxValue = (a: number | string, b: number | string): number | string => {
        if(typeof a === "number" && typeof b === "number") return Math.max(a, b);
        else if(typeof a === "string" && typeof b === "string") return a.length > b.length ? a : b;
        else return "";
    }

    console.log(maxValue(10, 20)); // 20
    console.log(maxValue("apple", "banana")); // "banana"
    console.log(maxValue(30, 30)); // 30
    console.log(maxValue("cat", "dog")); // "dog"
}

// 8. 유니언 타입으로 함수 오버로딩하기
{
    // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
    function getValue(param: string): string;
    function getValue(param: number): string;
    function getValue(param: string | number): string {
        if(typeof param === "number") return param.toString();
        return param;
    }

    console.log(getValue(123));   // "123"
    console.log(getValue("abc")); // "abc"    
}

// 9. 인터섹션 타입을 활용한 객체 합치기 (다양한 속성 포함)
{
    type Person = {name: string, age: number};
    type Contact = {email: string};
    const createContact = (a: Person, b: Contact): Person & Contact => {
        return {...a, ...b};
    }

    const person = { name: "Alice", age: 28 };
    const contact = { email: "alice@example.com" };

    const personWithContact = createContact(person, contact);
    console.log(personWithContact);
    // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

// 10. 유니언 타입을 사용한 나이 체크
{
    const getAge = (age: number | string): number => typeof age === "string" ? parseInt(age) : age;

    console.log(getAge("25"));  // 25
    console.log(getAge(30));    // 30
    console.log(getAge("abc")); // NaN
}