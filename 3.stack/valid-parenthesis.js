// Leetcode #20 Valid Parenthesis
const test = '(([])({[]}))';

var isValid = function(s) {
  const stack = new Array(); // Start empty array for stack
  const map = new Map([['}','{'],[']','['],[')','(']]); // Map each closing parenthesis to its opening counterpart.

  for (const char of s) { // Loop through each character of the string.
      if (map.has(char)) { // If it is a closing parenthesis,
          if (stack[stack.length-1] === map.get(char)) { // If it closes the latest opening parenthesis,
              stack.pop(); // Pop said opening parenthesis from the stack.
          } else {
              return false; // If it doesn't close the previous parenthesis, then it isn't valid. ie. (])
          }
      } else {
          stack.push(char) // If it is an opening parenthesis it is directly pushed to the stack.
                           // Remember, stacks are LIFO (Last In, First Out)
      };
  };

  return stack.length > 0 ? false : true; // In case we're only given opening parentheses, return false if the stack is not empty.
};

console.log(isValid(test));