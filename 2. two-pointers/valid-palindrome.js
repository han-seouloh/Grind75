// Leetcode Problem #125 Valid Palindrome
const test = "A man, a plan, a canal: Panama";

var isPalindrome = function(s) {
  let [ l, r ] = [ 0, s.length-1]; // Define the two endpoints from where we'll start analizing/checking for validity.
  while (l < r) { // This is to end the loop when the left pointer and the right pointer cross each other or end up in the
                  // same place (if there are an odd number of characters).
      while (!checkAlphaNum(s[l]) && l < r) { // This is to skip over non alphanumeric values for the left pointer.
          l++;
      }
      while (!checkAlphaNum(s[r]) && r > l) { // This is to skip over non alphanumeric values for the right pointer.
          r--;
      }

      if (s[l].toLowerCase() !== s[r].toLowerCase()) return false; // If at some point the pointers don't match, then it's not a palindrome.
      l++; // Move to next left pointer.
      r--; // Move to next right pointer.
  }
  return true; // If we manage to get out of the loop, then it is a valid palindrome.
};

const checkAlphaNum = (s) => { // Check if char is alphanumeric
  if ((s.charCodeAt(0) >= 'a'.charCodeAt(0) && s.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
      (s.charCodeAt(0) >= '0'.charCodeAt(0) && s.charCodeAt(0) <= '9'.charCodeAt(0)) ||
      (s.charCodeAt(0) >= 'A'.charCodeAt(0) && s.charCodeAt(0) <= 'Z'.charCodeAt(0))
      // All of the previous code can be simplified to a regex.test().
  ) return true;
  return false;
}

console.log(isPalindrome(test));