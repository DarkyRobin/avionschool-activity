function computeEquation(equation) {
  let chars = equation.split(/([\+\-\*\/])/);
  let result = 0;
  let operator = '';

  for(let char of chars) {
    if(char === '+' || char === '-' || char === '*' || char === '/') {
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
            break;
          case '*':
            result *= parseInt(char)
            break;
          case '/':
            result /= parseInt(char)
            break
        }
      }
    }
  }
  return result;
}

// Test cases
// console.log(computeEquation("1+1"));
// console.log(computeEquation("3*2+1"));
// console.log(computeEquation("4/2"));

//Part 2
function calculatePEMDAS(expression) {
  // Helper function to perform operations
  function applyOperation(operands, operators) {
    const operator = operators.pop();
    console.log(operator)
    const right = operands.pop();
    console.log(right)
    const left = operands.pop();
    console.log(left)
    switch (operator) {
      case '+':
        operands.push(left + right);
        break;
      case '-':
        operands.push(left - right);
        break;
      case '*':
        operands.push(left * right);
        break;
      case '/':
        if (right === 0) {
          throw new Error("Division by zero");
        }
        operands.push(left / right);
        break;
      case '^':
        operands.push(Math.pow(left, right));
        break;
    }
  }

  const operators = [];
  const operands = [];
  const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };

  const tokens = expression.match(/(\d+|\(|\)|[\+\-\*\/\^])/g);

  for (const token of tokens) {
    if (token === '(') {
      operators.push(token);
    } else if (token === ')') {
      while (operators.length > 0 && operators[operators.length - 1] !== '(') {
        applyOperation(operands, operators);
      }
      operators.pop(); // Remove the '('
    } else if (!isNaN(token)) {
      operands.push(parseFloat(token));
    } else {
      while (
        operators.length > 0 &&
        precedence[token] <= precedence[operators[operators.length - 1]]
      ) 
      {
        applyOperation(operands, operators);
      }
      operators.push(token);
    }
    console.log(operators)
    console.log(operands)
  }

  while (operators.length > 0) {
    applyOperation(operands, operators);
  }

  if (operands.length !== 1) {
    throw new Error("Invalid expression");
  }

  return operands[0];
}

// Test cases
console.log(calculatePEMDAS("1+(1+1+2)")); 
// console.log(calculatePEMDAS("100+1-(1+100+1)+1")); // 1
// console.log(calculatePEMDAS("100+1-(1+100-(1+100))")); // 101