function computeEquation(equation) {
  let chars = equation.split(/([\+\-\*\/])/);
  let result = 0;
  let operator = '';

  for(let char of chars) {
    if(char === '+' || char === '-') {
      operator = char;
    } else {
      if(operator === '') {
        result += parseFloat(char);
      } else {
        switch (operator) {
          case '+':
            result += parseInt(char);
            break;
          case '-':
            result -= parseInt(char)
            break
        }
      }
    }
  }
  return result;
}

// Test cases
console.log(computeEquation("1+1"));
