// Leetcode Problem #150 Evaluate Reverse Polish Notation
const test = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];

var evalRPN = function(tokens) {
  const numStack = []; // Initialize stack to store numbers.
  let result, // Variable to store result.
      top,  // Variable to store top value of stack.
      next; // Variable to store next value after top value in stack.

  if(tokens.length === 1) { // If the token is only one number.
      return Number(tokens[0]) // Return said number.
  }

  
  for (let i = 0; i < tokens.length; i++) { // Loop through tokens array
      if (Number(tokens[i]) || Number(tokens[i]) === 0) { // If the token is a number,
          numStack.push(Number(tokens[i])); // push said number to the stack.
      } else { // If it is a token,
          top = numStack.pop(); // top = first value popped from the stack.
          next = numStack.pop(); // next = second value popped from the stack.

          switch (tokens[i]) { // Switch case for the detected token.
              case '+': // In case it is a sum,
                  result = next + top; // Add both numbers.
                  break;
              case '-': // In case it is a subtraction,
                  result = next - top; // Subtract both numbers.
                  break;
              case '*': // In case it is a multiplication,
                  result = next * top; // Multiply both numbers.
                  break;
              default: // In case it is a division,
                  if ( next/top > 0) { // This is to round the numbers towards zero.
                      result = Math.floor(next / top); // Divide both numbers.
                  } else {
                      result = Math.ceil(next / top);
                  }
                  break;
          }
          numStack.push(result); // Push the result back to the stack. 
      }
  }
  return result; // Return result.
}

console.log(evalRPN(test));