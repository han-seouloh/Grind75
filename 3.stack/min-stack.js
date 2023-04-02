// Leetcode Problem #155 Min Stack

class MinStack {
  constructor () {
    this.stack = []; // Initialize stack.
    this.minStack = []; // Initialize stack where we keep track of minimum values.
    // Space complexity would be O(n+n) because of the two arrays but it simplifies to O(n).
  }

  push (val) { // Define push method.
    this.stack.push(val); // O(1) Push value to top of stack.
    !this.minStack.length // If the minStack is empty,
      ? this.minStack.push(val) // Push the current value to the minStack.
      : val <= this.minStack[this.minStack.length - 1] // Else, if the value is lower or equal to the current top value of the minStack,
        ? this.minStack.push(val) // Push the current value to the minStack.
        : null; // Else, do nothing.
  }

  pop () { // Define pop method.
    const top = this.stack.pop(); // Pop the top of the stack and store in a variable.

    top === this.minStack[this.minStack.length - 1] // If the popped value is the same as the top of the minStack,
      ? this.minStack.pop() // Pop the top of the minStack also.
      : null; // Else, do nothing to the minStack.
  }

  top () { // Define method to get the top value of the stack.
    return this.stack.length // If the stack is not empty,
      ? this.stack[this.stack.length - 1] // return the top of the stack.
      : null; // else return null.
  }

  getMin () { // Define method to get min value of the stack.
    return !this.minStack.length // If the minStack is empty,
      ? null // return null.
      : this.minStack[this.minStack.length - 1]; // Else, return the top of the minStack.
  }
}