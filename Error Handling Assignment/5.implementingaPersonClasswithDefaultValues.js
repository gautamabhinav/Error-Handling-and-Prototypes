class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
}
 

const person1 = new Person();
console.log(person1.getDetails()); // output: "Name: Unknown, Age: 0"

const person2 = new Person("Mithun", 20);
console.log(person2.getDetails()); // output: "Name: Alice, Age: 30"
