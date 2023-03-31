// Leetcode Problem #167 Two Sum II: Input Array Is Sorted
const test = [2,7,11,15];
const testTarget = 9;

var twoSum = function(numbers, target) {
  let [ l, r ] = [0, numbers.length-1] // Set the values for the two pointers. One for the beginning of the array
                                       // the other for the end of the array.

  while (numbers[l] + numbers[r] != target) { // Loop until the sum meets the target. (One answer is guaranteed)
                                              // Since the array is sorted,
      if (numbers[l] + numbers[r] > target) r--; // if the sum is greater than the target we must lower our upper pointer.
      if (numbers[l] + numbers[r] < target) l++; // if the sum is lower that the target we must raise our lower pointer.
  }

  return [l+1,r+1]; // We return the indexes. We add a 1 to each because the answer asks us to return the answer for a index-1 array.
};

console.log(twoSum(test, testTarget));
