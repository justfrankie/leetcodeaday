/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

 * @param {string} s
 * @return {boolean}
*/

// s = ":abc,dcb;a"
// returns true

// s = "abccba"
// returns true

// s = ""
// returns false

// s = "a"
// returns true

// s = "aaa"
// returns true

var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    if (s.length < 2) {
        return true;
    }
    
    if (s.split("").reverse().join("") === s) {
        return true
    } 
    return false;
};

// var isPalindromeTwoPointer = function(s) {
//     s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
//     if (s.length < 2) {
//         return true
//     }
//     // iterate over string
//     for (let i = 0; i < s.length; i++){
//         // create left pointer as i
//         let left = i;
        
//         // create right pointer as length - 1 - i
//         let right = s.length-1-i;
        
//         // if the left !== right characters AND current index isn't at the middle
//         if (s[left] !== s[right] && i !== Math.floor(s.length/2)){
//               return false 
//             }
//         continue;// continue the loop 
//     }
    
//     // otherwise return true
//     return true;
// };
