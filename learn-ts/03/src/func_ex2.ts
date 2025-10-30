{
  // 1
  // 함수 정의
  const sumAllNumbers = (...arrays: number[][]): number[] => {
    return arrays.map((arr) => arr.reduce((acc, cur) => acc + cur, 0));
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}
{
  // 2
  // 함수 정의
  const doubleValue = (value: string | number): number => {
    if (typeof value === "number") return value * 2;
    else return value.length * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
{
  // 3
  // 함수 정의
  const multiplyArrays = (numArr1: number[], numArr2: number[]): number[] => {
    const minLength = Math.min(numArr1.length, numArr2.length);
    return Array.from({ length: minLength }, (_, index) => {
      const a = numArr1[index];
      const b = numArr2[index];
      if (a !== undefined && b !== undefined) {
        return a * b;
      }
      return 0;
    });
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}
{
  // 4
  // 함수 정의
  const intersection = (numArr1: number[], numArr2: number[]): number[] => {
    return numArr1.filter((num) => numArr2.includes(num));
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}
{
  // 5
  // 함수 정의
  const formatInfo = (obj: { name?: string; age?: number }): string => {
    if (obj.name) {
      return `Name: ${obj.name}`;
    }
    if (obj.age) {
      return `Age: ${obj.age}`;
    }
    return "Invalid Types";
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}
{
  // 6
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string =>
    `${str1}${str2}`;

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}
{
  // 7
  // 함수 정의
  const squareArray = (numArr: number[]): number[] => {
    return numArr.map((num) => num * num);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}
{
  // 8
  // 함수 정의
  const addStringAndNumber = (value1: string, value2: number): string =>
    `${value1}${value2}`;

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}
{
  // 9
  // 함수 정의
  const compareValues = (value1: number, value2: string): string => {
    if (typeof value1 === "number" && typeof value2 === "string")
      return value1 > value2.length ? "Number is larger" : "String is Larger";
    return "Invalid Types";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}
{
  // 10
  // 함수 정의
  const checkValue = (value: boolean | string | number): string => {
    if (typeof value === "boolean") {
      return `It's a boolean`;
    }
    if (typeof value === "number") {
      return `It's a number`;
    }
    if (typeof value === "string") {
      return `It's a string`;
    }

    return "Invalid Types";
    // throw new Error("Invalid Types");
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
