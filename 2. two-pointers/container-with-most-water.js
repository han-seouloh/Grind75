// Leetcode Problem #11 Container With Most Water
const test = [1,8,6,2,5,4,8,3,7];

var maxArea = function(height) {
  let max = 0, // Define variable to store max value
      [l, r] = [0, height.length - 1]; // Define l and r pointers.
  
  while (l < r) { // Loop while l and r pointers don't meet.
      const leftBar = height[l]; // Height of current left bar.
      const rightBar = height[r]; // Height of current right bar.
      const area = Math.min(leftBar, rightBar) * (r - l); // Area = min(h)*(distance between bars).

      leftBar > rightBar ? r-- : l++; // Since we want to find the biggest container of water we move
                                      // the pointer of the smaller bar. Thus if the left bar is taller
                                      // we move the r pointer and viceversa. An edge case would be if both
                                      // are of same height. In this case you could choose to move whichever
                                      // pointer or you could test which one is taller in the next iteration
                                      // and move the corresponding pointer.
      max = Math.max(max, area); // Store the bigger value between the previously store max or the current
                                 // calculated area.
  }

  return max;
};

console.log(maxArea(test));