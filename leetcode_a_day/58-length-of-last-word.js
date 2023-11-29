/*
58. Length of Last Word
 Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5

 * @param {string}
 * @return {number}
 */

let lengthOfLastWord = (s) => {
  if (s.length === 0) {
    return 0;
  }

  let split = s.trim().split(" "); // split all words by spaces, without
  return new Number(split[split.length - 1].length);
};

let assertEquals = (actual, expected, message) => {
  // if (actual.length !== expected.length ) return false;
    if (actual === expected) {
      console.log(`X - FAILED Actual: ${actual} Expected: ${expected}!`);
      return;
    } else {
      console.log(`PASSED! ${message} PASSED! `);
      return;
    }
};

assertEquals(lengthOfLastWord("this is a sentence"), 8, "Should return 8");
assertEquals(lengthOfLastWord("a "), 1, "Should return 1");
