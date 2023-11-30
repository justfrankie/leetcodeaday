/**

20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

 * @param {string} s
 * @return {boolean}
 */
// Solution 1

var isValid = function(s) {
    // edge case: return true if s.length < 1
    if (s.length < 1) return true
    const symbols = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const check = []
    // each beginning symbol should have an end symbol to be considered as complete
   for (let i = 0; i <s.length; i++){ // iterate over s
    if (symbols[s[i]]) {// whenever a beginning symbol is encountered
       check.push(symbols[s[i]]) // push the end symbol in the check array
    } else { // whenever an end symbol is encountered 
    // should remove the corresponding beginning symbol present in the check array
      if (check.pop() !== s[i]) return false  // if the popped item from the check array does not correspond to the last open symbol, should return false
    }
   }
    return (check.length < 1 ? true : false) // at the end of the iteration, return true if check array length is 0
};

// Solution 2

var isValid = function(s) {
    // if length of s is less than 1, return false
    if (s.length < 2) {return false}

    // create a storage variable to keep track of symbols
    const stack = []
    const sym = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    // s = "([)]" FILO
    // iterate over s
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        // each time we encounter an open symbol
        if (sym[letter]) {
            stack.push(sym[letter])
        } else if (letter === stack[stack.length-1]) { // if letter matches the last closed symbol of the stack 
            // remove the symbol in the stack
            stack.pop()
        } else {
            return false
        }
    }

    // if there are anything left in the storage variable
    return stack.length === 0
};

