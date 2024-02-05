const findLargestKthFromList = (list, k) => {
  if (list.length < 2) return list[0];
  // sort list from largest to smallest,
  let sorted = list.sort((a, b) => b - a);
  // return the k index of the sorted array

  return sorted[k - 1];
};

console.log(findLargestKthFromList([1, 10, 100, 999], 1)); // should output 999
console.log(findLargestKthFromList([1, 1055, 99, 9], 2)); // should output 99
console.log(findLargestKthFromList([1, 10, 100, 999], 2)); // should output 100
console.log(findLargestKthFromList([1], 1)); // should output 1
console.log(findLargestKthFromList([], 1)); // should output null
