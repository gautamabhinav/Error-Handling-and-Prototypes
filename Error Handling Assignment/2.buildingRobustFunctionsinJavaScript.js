function getPerson(person) {
    try {
      if (typeof person !== "object" || !person.name || !person.age) {
        throw new Error("Invalid parameter type");
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (error) {
      return error.message;
    }
}

const person1 = { name: "Mithun", age: 20 };
console.log(getPerson(person1)); 

const person2 = { name: "Mithun" };
console.log(getPerson(person2)); 

const person3 = ["name", "Charlie"];
console.log(getPerson(person3)); 
