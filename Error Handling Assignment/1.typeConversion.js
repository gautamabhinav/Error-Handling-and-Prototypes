function convertToNumber(str) {
  try {
    const num = Number(str);
    if (isNaN(num)) {
      throw new Error('Invalid number');
    }
    return num;
  } catch (error) {
    return error.message;
  }
}


console.log(convertToNumber("42")); // output: 42
console.log(convertToNumber("3.14")); // output: 3.14
console.log(convertToNumber("hello")); // output: "Invalid number"
console.log(convertToNumber("N")); // output: "Invalid number"

console.log(convertToNumber("123")); 
console.log(convertToNumber("abc"));


