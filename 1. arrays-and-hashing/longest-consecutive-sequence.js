// Leetcode Problem #128 Longest Consecutive Sequence
const test = [0,3,7,2,5,8,4,6,0,1];

var longestConsecutive = function(nums) {
  const set = new Set(nums); // Make a set of unique values of nums (to remove repeats).
  let longestSequence = 0; // Variable to store longest sequence.

  for (const num of nums) { // Loop through each number of nums. 
      if (!set.has(num-1)) { // If the set does not have the previous number of the current number, then it is the start of a sequence.
          let length = 0; // Variable to store the sequence length of the current number.
          while (set.has(num + length)) { // Loop while the set contains the next consecutive number,
              length ++;                  // add 1 to the length and loop again.
          }
          longestSequence = Math.max(longestSequence, length); // Store the longest sequence between the previously stored one
      }                                                        // and the one we just calculated.
  }

  return longestSequence; // Return the longest sequence.
};

console.log(longestConsecutive(test));