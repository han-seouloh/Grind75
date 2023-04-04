// Leetcode Problem #150 Evaluate Reverse Polish Notation
const test = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

var evalRPN = function(tokens) {
  const numStack = []; // Initialize stack to store numbers.
  let result, // Variable to store result
      top; //

  if(tokens.length === 1) {
      return Number(tokens[0])
  }

  
  for (let i = 0; i < tokens.length; i++) {
      if (Number(tokens[i]) || Number(tokens[i]) === 0) {
          numStack.push(Number(tokens[i]));
      } else {
          top = numStack.pop();
          result = numStack.pop();

          switch (tokens[i]) {
              case '+':
                  result = result + top;
                  break;
              case '-':
                  result = result - top;
                  break;
              case '*':
                  result = result * top;
                  break;
              default:
                  if (top/result > 0) {
                      result = Math.floor(result / top);
                  } else {
                      result = Math.ceil(result / top);
                  }
                  break;
          }
          numStack.push(result);         
      }
  }
  return result;
}

console.log(evalRPN(test));