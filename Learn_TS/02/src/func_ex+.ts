// 문제 1
{
    // 함수 정의
    const sumAllNumbers = (...numArrs: number[][]): number[] => numArrs.map(numArr => {
        return numArr.reduce((acc, cur) => acc + cur, 0);
    });

    // 함수 호출
    const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
    console.log(result); // [3, 12, 13] 
}

// 문제 2
{
    // 함수 정의
    const doubleValue = (para: number | string): number => {
        if(typeof para === "number") return 2 * para;
        else return 2 * para.length;
    }

    // 함수 호출
    const result1 = doubleValue(5); 
    const result2 = doubleValue("hello"); 
    console.log(result1); // 10
    console.log(result2); // 10
}

// 문제 3
{
    // 함수 정의
    const multiplyArrays = (arr1: number[], arr2: number[]): number[] => {
        const result: number[] = [];
        const minLen = Math.min(arr1.length, arr2.length);

        for(let i = 0; i < minLen; i++){
            result.push(arr1[i] * arr2[i]);
        }

        return result;
    }

    // 함수 호출
    const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
    console.log(result); // [4, 10, 18]

    const result2 = multiplyArrays([1, 2], [4, 5, 6]);
    console.log(result2); // [4, 10]    
}

// 문제 4
{
    // 함수 정의
    const intersection = (arr1: number[], arr2: number[]): number[] => arr1.filter((e) => arr2.includes(e));

    // 함수 호출
    const result = intersection([1, 2, 3], [2, 3, 4]);
    console.log(result); // [2, 3]   
}

// 문제 5
{
    // 함수 정의
    type Info = { name: string } | { age: number };

    const formatInfo = (info: Info): string => {
        if ("name" in info) {
            return `Name: ${info.name}`;
        }
        if ("age" in info) {
            return `Age: ${info.age}`;
        }
        return "";
    };

    // 함수 호출
    const info = formatInfo({ name: "Alice" });
    console.log(info); // "Name: Alice"
}

// 문제 6
{
    // 함수 정의
    const combineStrings = (str1: string, str2: string): string => str1 + str2;

    // 함수 호출
    const combined = combineStrings("Hello", "World");
    console.log(combined); // "HelloWorld"
}

// 문제 7
{
    // 함수 정의
    const squareArray = (arr: number[]): number[] => arr.map(num => num * num);

    // 함수 호출
    const result = squareArray([1, 2, 3, 4]);
    console.log(result); // [1, 4, 9, 16]
}

// 문제 8
{
    // 함수 정의
    const addStringAndNumber = (str: string, num: number): string => str + num;

    // 함수 호출
    const result = addStringAndNumber("The number is ", 10);
    console.log(result); // "The number is 10"
}

// 문제 9
{
    // 함수 정의
    const compareValues = (num: number, str: string): string => {
        if (num > str.length) return "Number is larger";
        else return "String is larger";
    };

    // 함수 호출
    const result = compareValues(10, "Hello");
    console.log(result); // "Number is larger"
}

// 문제 10
{
    // 함수 정의
    const checkValue = (value: number | string | boolean): string => {
        if (typeof value === "number") return "It's a number";
        if (typeof value === "string") return "It's a string";
        if (typeof value === "boolean") return "It's a boolean";
        return "";
    };

    // 함수 호출
    const result = checkValue(true);
    console.log(result); // "It's a boolean"
}