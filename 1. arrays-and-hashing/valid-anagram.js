const word1 = 'anagram';
const word2 = 'nagaram';
const word3 = 'anagram';
const word4 = 'nagakam';

var isAnagram = function(s, t) {
  const map = new Map(); // Use hash to store char frequencies as {char: freq}

  if (s.length !== t.length) return false; // If lengths don't match they are automatically discarded

  addFreq(s, map); // Add char frequencies of word1 to map.
  subtractFreq(t, map); // Remove char frequencies of word2 from map.

  return checkFreq(map); // If frequencies are all 0, then its an anagram.
};

// I added a console.log at each iteration for an easier visualization how each char's frequency is added
// and then subtracted.

const addFreq = (str, map) => {
  for (const char of str) {
      const count = (map.get(char) || 0) + 1;
      map.set(char, count);
      console.log(map);
  };
};

const subtractFreq = (str, map) => {
  for (const char of str) {
      if (!map.has(char)) continue;

      const count = map.get(char) - 1;
      map.set(char, count);
      console.log(map);
  };
};

const checkFreq = (map) => {
  for (const [ char, count ] of map) {
      const isEmpty = count === 0;
      if (!isEmpty) return false;
  }

  return true;
};

console.log(isAnagram(word1, word2));
console.log(isAnagram(word3, word4));