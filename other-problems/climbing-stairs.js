// Leetcode Problem #70 Climbing Stairs
const climbStairs = (n) => {
  let n1 = 2, n2 = 1, output = 0;

  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;

  for (let i = 3; i <= n; i++) {
    output = n1 + n2;
    n2 = n1;
    n1 = output;
  }

  return output;
};