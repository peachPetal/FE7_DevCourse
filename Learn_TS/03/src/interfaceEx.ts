import { NumberLiteralType } from "typescript";

// 1. 간단한 객체 타입 정의
{
    interface Person{
        name: string;
        age: number;
    }

    const person: Person = {
        name: "kim",
        age: 20,
    }
}

// 2. 메소드가 포함된 인터페이스
{
    interface Car{
        brand: string;
        model: string;
        start(this: Car, speed: number): void;
    }

    const car: Car = {
        brand: "Hyundai",
        model: "Avante",
        start(this: Car, speed: number) {
            console.log(`${this.brand} ${this.model} Engine Start! / Speed: ${speed}KM`);
        },
    }

    car.start(100);
}

// 3. 선택적 속성 사용
{
    interface Employee {
        name: string;
        position: string;
        department?: string;
    }

    const employee: Employee = {
        name: "kim",
        position: "Sales",
        department: "IT",
    }
}

// 4. 배열을 포함한 인터페이스
{
    interface Team {
        name: string;
        members: string[];
    }

    const team: Team = {
        name: "Sucoding",
        members: ["A", "B", "C"],
    }
}

// 5. 상속을 이용한 인터페이스 확장
{
    interface Animal {
        name: string;
        age: number;
    }

    interface Dog extends Animal {
        breed: string;
    }
}

// 6. 인터페이스에서 메소드 정의
{
    interface Person {
        name: string;
        age : number;
        greet(): string;
    }

    const person: Person = {
        name : "Kim",
        age : 11,
        greet(){
            return `Hello, my name is ${this.name}`;
        },
    }
}

// 7. 다형성을 가진 인터페이스
{
    interface Shape{
        area(): void;
    }

    interface Circle extends Shape{
        radius : number;
    }

    interface Rectangle extends Shape{
        width: number;
        height: number;
    }

    const circle: Circle = {
        radius: 10,
        area(this: Circle){
            return Math.PI * Math.pow(this.radius, 2);
        },
    }

    const rectangle: Rectangle = {
        width: 5,
        height: 10,
        area(this: Rectangle) {
            return this.width * this.height;
        },
    }
}

// 8. 다중 인터페이스를 사용하는 객체
{
    interface Person{
        name: string;
        age: number;
    }

    interface Address{
        street: string;
        city: string;
        zipcode: string;
    }

    interface Contact extends Person, Address {};

    const contact: Contact = {
        name: "kim",
        age: 20,
        street: "Gangnam Dae-ro",
        city: "Seoul",
        zipcode: "1111",
    }
}

// 9. 인터페이스에 인덱스 시그니처 사용
{
    interface Dictionary{
        [key: string]: string;
    }
    const dictionary: Dictionary = {
        hello: "a",
        myName: "kisu",
    }
}

// 10. 인터페이스를 사용한 함수 타입 정의
{
    interface Operation{
        (a: number, b: number): number;
    }

    const add: Operation = (a, b) => a + b;
    const subtract: Operation = (a, b) => a - b;
}