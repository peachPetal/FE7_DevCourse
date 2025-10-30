{
  class User {
    name;
    age;
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hello, ${this.name}`;
    }
  }
  const person = new User("kisu", 20);
  console.log(person.greet());
}
