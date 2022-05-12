/**
17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    const letters = {
                     2 : ["a", "b", "c"],
                     3 : ["d", "e", "f"],
                     4 : ["g", "h", "i"],
                     5 : ["j", "k", "l"],
                     6: ['m', 'n', 'o'],
                     7: ['p', 'q', 'r', 's'],
                     8: ['t', 'u', 'v'],
                     9: ['w', 'x', 'y', 'z'],
                    }
    if (!digits.length) {return []}
    let result = [''];
    
    for (let i = 0; i < digits.length; i++) {
        let newSubset = [];
        for (let x = 0; x < result.length; x++) {
           
            for (let letter of letters[digits[i]]) {
                newSubset.push(result[x].concat(letter));
            }
        }
        
        // check if last digit
        if (i == digits.length - 1) {
            return newSubset;
        }
        result = newSubset;
     }
};
