// Leetcode Problem #88 Merge Sorted Array
let nums1 = [1,2,3,0,0,0],
m = 3,
nums2 = [2,5,6],
n = 3;


const merge = (nums1, m, nums2, n) => {
  if (!nums2.length)
    return nums1;
  if (!nums1.length)
    return nums2;

  let pointer1 = nums1.length - m, pointer2 = 0;
  for (let i = nums1.length - 1; i - (nums1.length - m) > -1; i--) {
    nums1[i] = nums1[i - (nums1.length - m)];
  }

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[pointer1] < nums2[pointer2] && pointer1 < nums1.length) {
      nums1[i] = nums1[pointer1];
      pointer1++;
    } else if (nums2[pointer2] <= nums1[pointer1] && pointer2 < n) {
      nums1[i] = nums2[pointer2];
      pointer2++;
    } else if (pointer1 === nums1.length && pointer2 < n) {
      nums1[i] = nums2[pointer2];
      pointer2++;
    }
  }
};