// Leetcode Problem #15 3Sum
const test = [-1,0,1,2,-1,-4];

var threeSum = function(nums) {
  const output = new Array(); // This is where we will store the output.
  const sortedNums = nums.sort((a,b) => a - b); // If you fix one of the 3 values to sum it just becomes a 2Sum problem.
                                                // If you have done the TwoSum with a sorted array this becomes easier to understand.
                                                // If you haven't tried it already, check the two-sum-ii-input-array-is-sorted.js.
                                                // This is why I sorted the array previously.
  for (let i = 0; i < sortedNums.length; i++) { // Loop through the sorted array. This will fix the first number to add.
      if ( i > 0 && sortedNums[i] === sortedNums[i-1]) continue; // We don't want duplicates so if the second fixed number is
                                                                 // equal to the previous one we fixed, then pass the loop.
      let [ l,r ] = [i + 1, sortedNums.length-1]; // Define our two pointers with the left always 1 ahead of the fixed number.

      while ( l < r) { // Loop while the two pointers don't cross each other.
          const threeSum = sortedNums[i] + sortedNums[l] + sortedNums[r]; // Define a variable to the sum of the three numbers.
                                                                          // From here on it is almost the same as the mentioned
                                                                          // twosum problem.
          if (threeSum < 0) l++; // If the sum is smaller than the target, we have to increase our lower bound.
          if (threeSum > 0) r--; // If the sum is bigger than the target, we have to decrease our upper bound.
          if (threeSum === 0) { // If the sum is equal to the target,
              output.push([sortedNums[i], sortedNums[l], sortedNums[r]]); // we push the numbers to the output array
              l++; // and we move on to the next possible set.
              while (sortedNums[l] === sortedNums[l-1] && l < r) { // Once again to remove duplicates, if the new lower bound
                                                                   // is the same as the previous one,
                  l++;                                             // move on to the next.
              }
          };
      }
  };
  return output; // Return output.
};

console.log(threeSum(test));