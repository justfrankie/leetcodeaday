let duplicateArray = (input) => {
  input = input.concat(input.slice()); // concat the two arrays after creating a duplicate
  return input;
};

let expect = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(
  "Should be: [1,2,3,4,5,1,2,3,4,5] \n",
  duplicateArray([1, 2, 3, 4, 5])
); // outputs [1,2,3,4,5,1,2,3,4,5]
