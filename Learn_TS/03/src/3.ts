{
    // 인터페이스
    // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
    // interface
    // type 식별자 = 할당
    // interface 식별자 {}
    // 국내에서는 대부분 객체는 인터페이스 정의
    // 나머지는 타입별칭
    interface Person {
        name: string;
        age: number;
        gender: "male" | "female" | "netural";
    }
    
    const person: Person = {
        name: "kim",
        age: 20,
        gender: "male",
    };
}
{
    type Gender = "male" | "female" | "netural";
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
    interface Person{
        name: string;
        age: number;
       // greet: () => void;
       greet(msg: string): void;
    }

    const person: Person = {
        name: "kim",
        age: 20,
        greet(msg) {
            console.log(`${msg}, ${this.name}`);
        },
    }
}
{
    // 자동 병합
    interface Person {
        readonly name: string;
    }

    interface Person{
        readonly age: number;
    }

    interface Person {
        [key: string]: string | number;
    }

    const person: Person = {
        name: "kim",
        age: 20,
    };
}

{
    // 상속
    interface Person {
        name: string;
        age: number;

    }

    interface Developer extends Person{
        skill: string;
    }

    const developer: Developer = {
        name: "kim",
        age: 20,
        skill: "javaScript",
    }
}
{
    // 다중 인터페이스 상속
    interface Flyer {
        fly(): void;
    }
    interface Swimmer{
        swim(): void;
    }

    type FlyerAndSwimmer = Flyer & Swimmer;

    interface Bird extends Flyer, Swimmer{
        sound(): void;
    }

    const bird: Bird = {
        fly() {},
        swim() {
            
        },
        sound() {
            
        },
    }
}
{
    interface AddFn {
        (a: number, b: number): number;
    }

    const add: AddFn = (a, b) => a + b;
}