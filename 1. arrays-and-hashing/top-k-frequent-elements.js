// This is the solution for Leetcode Problem 49. Group Anagrams.
const test = [1,1,2,2,2,3,4,5,5,5,6,7,8,15,15,15,15,15,27,27,27,18,18];

var topKFrequent = function(nums, k) {
  const count = new Map(); // Use Hash to map the counts to each number { number:count }
  const result = new Array(); // We will push the top K elements to this array.

  for (const num of nums) { // For every number,
      const key = num;
      const value = (count.get(num) || 0) + 1;

      count.set(key, value); // Map their respective count to it.
      // You could simplify the previous three lines to:
      // count.set(num, (count.get(num) || 0) + 1)
  }

  const sortedFreq = [...count].sort((a,b) => b[1] - a[1]); // Unpack hash to array and sort from most frequent to least.
  
  for (let i = 0; i < k; i++) { // Loop through first k elements of sorted freq. array.
      result.push(sortedFreq[i][0]); // Push element to result array.
  }

  return result; // Return results.
};

console.log(topKFrequent(test,2));
