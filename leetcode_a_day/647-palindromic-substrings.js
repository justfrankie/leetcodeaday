/*
647. Palindromic Substrings
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    // create count variable
    let count = 0;
    // itereate over s
    for (let i = 0; i < s.length; i++) {
    // iterate j loop over i
      for (let j = i; j < i+2; j++) {
        // create left and right pointers within j loop
        let left = i;
        let right = j;
        while(left >= 0 && right < s.length && s[left] === s[right]) {
          count++;
          left--;
          right++
        }
      }
  }
    return count
};

// testcases
// s = "ab" returns 2 "a" and "b"
// s = "aacce" returns "a" "aa" "c" "cc" "e" "ce" "ac"
// s = "abcdefg" returns 7
