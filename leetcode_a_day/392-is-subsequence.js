/**
392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
 

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    // all lowercase letters

    // s = "a c e"
    // t = "a b c d e"
    // edge case:
        // s = "" return true
        // t = "" return false
    if (s.length < 1 ) return true
    if (t.length < 1) return false
    let index = 0;
    //iterate over t
    for (let i = 0; i < t.length; i++) {
    // check if current letter in t is the same as current letter in s 
        if (t[i] === s[index]) {
        // if it is, increase count of index++
            index++;
        }
    }
        // return comparison of the count === s.length-1
    return index === s.length
};
