// Define the Student prototype object
const Student = {
    name: '',
    printDetails() {
      console.log(`Hello, the name is ${this.name}`);
    }
  };
  
  // Instantiate a Student object and call the printDetails method

  const student = Object.create(Student);
  student.name = 'Mithun';

  student.printDetails(); // output: "Hello, my name is Mithun"
  