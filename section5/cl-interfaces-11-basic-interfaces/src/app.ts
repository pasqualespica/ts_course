interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

type Person1 = {
  name: string;
  age: number;

  greet(phrase: string): void;
};

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

class Dajee implements Person1 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + this.name + this.age);
  }
}
class GoodPeron implements Person {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + this.name + this.age);
  }
}

let u: GoodPeron = new GoodPeron("daje", 33);

console.log(typeof u);
