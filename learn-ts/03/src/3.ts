{
  // 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
  // interface
  // type 식별자 = 할당
  // interface 식별자 { }
  // 국내에서는 대부분 객체는 인터페이스 정의함
  // 그외에는 타입별칭

  // 헝가리언 표기법
  interface IPerson {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  }

  type TPerson = {
    name: string;
    age: number;
    gender: "male" | "female" | "natural";
  };

  const person: TPerson = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}
{
  type Gender = "male" | "female" | "natural";
  interface Person {
    name: string;
    age: number;
    gender: Gender;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    gender: "male",
  };
}
{
  interface Person {
    name: string;
    age: number;
    greet(message: string): void; //greet: () => void;
  }

  const person: Person = {
    name: "kim",
    age: 20,
    greet(message) {
      console.log(`${message}, ${this.name}`);
    },
  };
}
{
  interface Person {
    [key: string]: string | number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}
{
  // 자동 병합
  interface Person {
    readonly name: string;
  }

  interface Person {
    readonly age?: number;
  }

  const person: Person = {
    name: "kim",
    age: 20,
  };
}
{
  // 기본적인 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }

  const developer: Developer = {
    name: "kim",
    age: 20,
    skill: "javascript",
  };
}
{
  // 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }
  interface Swimmer {
    swim?(): void;
  }
  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }
  type FlyerAndSwimer = Flyer & Swimmer;

  const duck: Bird = {
    fly() {},
    sound() {},
  };
}
{
  interface AddFn {
    (a: number, b: number): number;
  }

  const add: AddFn = (a, b) => a + b;
}
