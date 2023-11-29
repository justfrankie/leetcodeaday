/*

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

You may assume all the characters consist of printable ascii characters.
 * @param {character[]}
 * @return {void} Do not return anything, modify s in-place instead.
 */

let reverseString = function(strArr) {

    let leftPointer = 0;
    let rightPointer = strArr.length - 1;

    while (leftPointer < rightPointer) {
    let temp = strArr[leftPointer];
    strArr[leftPointer] = strArr[rightPointer];
    strArr[rightPointer] = temp;

    leftPointer++
    rightPointer--
    }
  return strArr
}




let assertEquals = (actual, expected, message) => {
  if (actual.length !== expected.length ) return false;

  for (let i = 0; i < actual.length; i++) {
    if (JSON.stringify(actual[i]) !== JSON.stringify(expected[i])) {
      console.log(`X - FAILED Actual: ${actual} Expected: ${expected}!`)
      return;
    } else {
      console.log(`PASSED! ${message} PASSED! `)
      return;
    }
  }
}



assertEquals(reverseString(["h", "e", "l", "l", "o"]), ["o", "l", "l", "e", "h"], "Two arrays equal to each other") // returns [o,l,l,e,h]
assertEquals(reverseString(["m", "e", "l", "l", "o", "w"]), ["w", "o", "l", "l", "e", "m"],"Two arrays equal to each other") // returns ["w", "o", "l", "l", "e", "m"]

