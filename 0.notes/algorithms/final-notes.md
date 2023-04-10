# Final Notes
## Algorithm Design Techniques:
**Brute force** - Simple and exhaustive technique that evaluates every possible outcome to find the best solution. ie. Linear search.
**Greedy** - Choose the best ooption at the current time, without any consideration for the future. ie. Dijkstra's algorithm, Prim's algorithm, and Kruskal's algorithm.
**Divide and Conquer** - Divide the problem into smaller sub-problems. Each sub-problem is then solved and the partial solutions are recombined to determine the overall solution. ie. Binary Search, Quick Sort, and Merge Sort.
**Dynamic Programming** - Divide the problem into smaller sub-problems. Break it down into smaller but overlapping sub-problems. Sotre the result and reuse it for the same sub-problems. This is called memoization and is an optimization technique that improves the time complexity of your algorithm. ie. Fibonacci numbers and climbing staircase.
**Backtracking** - Generate all possible solutions. Check if the solution satisfies all the given constraints and only then you proceed with generating subsequent solutions. If the constraints are not satisfied, backtrack and go on a different path to find the solution. ie. N-Queens problem.

Other practice problems:
 - Find the greatest common divisor using Euclidian algorithm.
```js
const gcd = (a, b) => { // Using recursion
  if (a < b) {
    let temp = b;
    b = a;
    a = temp;
  }
  
  if (a % b === 0) {
    return b
  } else {
    return gcd(b, a % b); 
  }
}
const gcd = (a, b) => { // Using iteration O(n)
  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }
  
  while (a && b && a !== b) {
      [a, b] = [b, a % b]
  }

  return a;
}
```
 - Finding permutations and combinations of a list of numbers
 - Finding the longest common substring in a given string
 - Knapsack problem