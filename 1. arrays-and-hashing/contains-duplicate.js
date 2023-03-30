// Leetcode Problem 217. Contains Duplicate
duplicate = [1,2,3,4,1];
noDuplicate = [1,2,3,4,5];

const containsDuplicate = (nums) => {
  const set = new Set(); // A set stores unique values. (A value cannot be repeated in a set)

  for (const num of nums) { // This loops over every number in the array.
    if (set.has(num)) return true; // If the number is already in the set, a duplicate was found.

    set.add(num); // If not, then add the number to the set.
  }

  return false // If we manage to get out of the loop, then no duplicates were found.
}


console.log('There\'s a duplicate: ' + containsDuplicate(duplicate));
console.log('There\'s a duplicate: ' + containsDuplicate(noDuplicate));