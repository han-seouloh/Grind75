// Leetcode Problem 1. Two Sum
const nums = [2,7,11,15];
const target = 9;

var twoSum = function(nums, target) {
  const map = new Map(); // This is a hashmap where we will store { number: index }

  for (let i = 0; i <= nums.length; i++) { // Loop through the numbers array
      const sum = target - nums[i]; // For each number each what is its complement to reach the target
      if (map.has(sum)) return [map.get(sum), i]; // If the map already has the complement, return index of complement and current num
      map.set(nums[i], i); // If not, then add the number and its index to the map.
  };

  return [-1, -1];
};

console.log(twoSum(nums, target));