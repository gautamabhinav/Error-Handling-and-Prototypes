function numberChecker(numbers) {
    return function(num) {
      return numbers.includes(num);
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(3)); // output: true
  console.log(checkNum(6)); // output: false
  