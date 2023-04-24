// Leetcode Problem #704 Binary Search
const test = [-1,0,3,5,9,12];
const testTarget= 9;

var search = function(nums, target) {
  let [l, r] = [0, nums.length - 1];
  let mid = Math.ceil((l + r) / 2);

  if(nums[l] === target) return l;

  while ( l < r ) {
      mid = Math.ceil((l + r) / 2);
      if (nums[mid] === target) return mid;
      if (mid === r || mid === l) break;
      if (nums[mid] > target) {
          r = mid;
      } else {
          l = mid;
      }
  }

  return -1;
};

console.log(search(test, testTarget));