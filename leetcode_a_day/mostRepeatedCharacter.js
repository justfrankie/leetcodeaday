/*
Most repeated character:

given a string x, return the most frequent alpha character
in an alpha-numeric mix in the string x

example:

Input: "xAaDgjHeIlLNmIOPAmbAnuAeAkaA"
output: "A"

Input: "AaBaa"
output: "a"

1 <= a.length <= 100;
x contains lowercase and uppercase English letters and numbers
*/

const mostRepeated = (x) => {
  // early exit:
  // if length of x is 1 and is an alpha character, return x
  if (x.length === 1 && !Number.isInteger(x[0])) {
    return x
  }

  // create result string
  let result = '';
  // create map of seen strings
  let map = {};
  // create highest tracking variable
  let highest = 0;

  // iterate over x string
  for (let i = 0; i < x.length; i++) {
    let curr = x[i]

    //  if current string is an alpha character and hasn't been seen before
    if (map[curr] === undefined && !parseInt(curr)) {
      // add current number 1
      map[curr] = 1;
       
      //  else if current string is an alpha character and there is a value in map
    } else if (map[curr] > 0 && !parseInt(curr)) {
      // increment the value 
      map[curr]++;
    }
    // if current value of the current string is greater than highest
    if (map[curr] > highest) {
      // set highest to the new number
      highest = map[curr]
      result = curr;
    }
  }
  console.log(result, highest)
  // return result string
  return result;
};



const input = "xAa3234gj4321HeI3lLNmI5OP1AmbAnuAeAkaAAAAAA";
const solution = "A";
const output = mostRepeated(input);

// const input = "A";
// const solution = "A";
// const output = mostRepeated(input);
// const input = "11111AA";
// const solution = "A";
// const output = mostRepeated(input);
