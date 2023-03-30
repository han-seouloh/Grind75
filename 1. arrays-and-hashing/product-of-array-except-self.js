// Leetcode Problem 238. Product of Array Except Self.
const test = [-1,1,0,-3,3];

var productExceptSelf = function(nums) {
  const output = new Array(nums.length); // Initialize array of same size.
                                         // Output will be the cummulative multiplication of the nums array
                                         // going forwards and backwards with an offset of 1 and starting 
                                         // off with 1 for the offsetted element going forth and back.
                                         // ie. for array = [1,2,3,4] [1,1,2,6] [ , 8, 6]
                                         // going forth => [1(forward offset), 1*1, 1*1*2, 1*2*3] = [1,1,2,6]
                                         // and multiply back => [1(forward offset)*2*3*4, 1*3*4, 2*4 ,6*1(backward offset)] = [24, 12, 8, 6]

  let prefix = 1; // Value for offsetted array element => first element of array;
  for (let i = 0; i < nums.length; i++) { // Loop through the nums array starting from index 0.
      output[i] = prefix; // Output array is filled with the prefix value.
      prefix *= nums[i]; // With each iteration prefix value becomes cumulative product of the elements preceding the current nums element.
  }

  let postfix = 1; // Value for offsetted array element => last element of array;
  for (let i = nums.length - 1; i > -1; i--) {// Loop through the nums array starting from last element.
      output[i] *= postfix; // Previous output array is multiplied by the postfix value.
      postfix *= nums[i]; // With each iteration postfix value becomes cumulative product of the elements succeeding the current nums element.
  }
  
  return output;
};

console.log(productExceptSelf(test));