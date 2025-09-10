import { NumberLiteralType } from "typescript";

{
    // class
    // 타입 시스템이 추가됨
    class User{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }

        greet(): string{
            return `Hello ${this.name}`;
        }
    }
    const person = new User("kisu", 20);
    console.log(person.greet());
}
{
    // 2. 접근제어자 public private protected readonly
    // public 디폴트, 누구나 접근 가능
    // private 클래스 내부에서만 접근 가능
    // protected 클래스 외부에서만 접근 불가능, 내부 또는 상속 클래스면 접근 가능
    // readonly 변경 불가
    class Car{
        protected speed: number;
        constructor(speed: number){
            this.speed = speed;
        }
    }

    class Benz extends Car {
        printSpeed(): void{
            console.log(`${this.speed}`);
        }
    }

    const benz = new Benz(100);
    console.log(benz.printSpeed());
}

