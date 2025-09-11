{
    // 유틸리티 타입 / 기존에 존재하는 타입을 변환
    // 제네릭을 기반
}
{
    interface User {
    name: string;
    age: number;
    email: string;
    }

    const u1: User = {
        name: "Kim",
        age: 20,
        email: "test@naver.com",
    };

    const u2: Partial<User> = {
        name: "Kim",
        age: 20,
    };

    // 예제 1: 일부 속성만 지정
    const user1: Partial<User> = { name: "John" };

    // 예제 2: age만 지정
    const user2: Partial<User> = { age: 30 };

    // 예제 3: name과 email만 지정
    const user3: Partial<User> = { name: "Alice", email: "alice@example.com" };

    // 예제 4: 모든 속성을 생략 가능
    const user4: Partial<User> = {};  // 모든 속성을 생략할 수 있음
}
{
        interface Guest {
    name?: string;
    age?: number;
    email?: string;
    gender?: string;
    }

    type User = Required<Guest>;
    // 예제 1: 모든 속성을 필수로 만듦
    const user1: Required<Guest> = { name: "John", age: 30, email: "john@example.com", gender:"male"};

    // 예제 2: 속성 하나라도 빠지면 오류
    const user2: Guest = { name: "Alice" };  // 오류: age와 email은 필수

    // 예제 3: 모든 속성이 필수
    const user3: Required<Guest> = { name: "Bob", age: 40, email: "bob@example.com", gender:"male"};

    // 예제 4: 속성 하나라도 빠지면 오류
    // const user4: Required<User> = { name: "Charlie", email: "charlie@example.com" };  // 오류
}
{
// 예제 1: string 키와 number 값을 가지는 객체 타입
const scores: Record<string, number> = {
  math: 90,
  english: 80,
  science: 85,
};

// 예제 2: 숫자 키와 string 값을 가지는 객체 타입
const userScores: Record<number, string> = {
  1: "Excellent",
  2: "Good",
  3: "Average",
};

// 예제 3: 문자열 키와 boolean 값을 가지는 객체 타입
const availability: Record<string, boolean> = {
  "John": true,
  "Alice": false,
  "Bob": true,
};

// 예제 4: 객체의 값을 반드시 정의해야 함
const userInfo: Record<string, number> = {
  height: 180,
  weight: 75,
};    
}