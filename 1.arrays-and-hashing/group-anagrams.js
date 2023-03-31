// Leetcode Problem 49. Group Anagrams.
const test = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function(strs) {
  const map = new Map(); // Were going to store the words by their letter frequency.
                         // ie. { letterFreq : [word,...]}
  if (!strs.length) return []; // If the strings array is empty, return empty array.

  groupWords(strs, map); // Group words and categorize them by their letter freq.

  return [...map.values()]; // Return array of grouped anagrams.
};

const groupWords = (strs, map) => {
  for (const word of strs) { // For every word in the strings array,
      const key = getKey(word); // Get its letter freq. code which will be the key in the hashmap.
      const value = map.get(key) || []; // Get the values already stored in said key or, if empty,
                                        // start an empty array.
      value.push(word); // Push the current word into the value array for current key.
      map.set(key, value); // Set the new value array for the current key.
  }
};

const getKey = (word) => {
  const freqCode = new Array(26).fill(0); // Build an array for each lowercase letter a-z and fill with 0's.
  for (const char of word) { // For every character of the current word,
      const index = getCharIndex(char); // get its corresponding index for the a-z array. 
                                        //ie. a = 0, b = 1, ... z = 25.
      freqCode[index] ++; // Add +1 for every instance the character to its corresponding index in the array.
  }

  return freqCode.toString(); // Arrays can't be used as keys for hashes so we convert the array to string to use
                              // as a unique code for each anagram.
}

const getCharIndex = (char) => {
  return char.charCodeAt(0) - 'a'.charCodeAt(0); // Bound the index from 0 to 25. Since the letters are bounded from a-z,
                                                 // we just need to subtract the code for 'a' to all the characters. Thus resulting in
                                                 // ie. 'a'.code - 'a'.code = 0
                                                 //     'b'.code - 'a'.code = 1
                                                 //             ...
                                                 //     'z'.code - 'a'.code = 25
}

console.log(groupAnagrams(test));