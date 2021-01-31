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
let isValid = (s) => {
  if (s === undefined || s === null) { return false }
  let stack = []; // stack variable
  let map = { // map of CLOSED symbols
    ')': '(',
    '}': '{',
    ']': '['
  } 
   for (let i = 0; i < s.length; i++){ // iterate over input
    let curr = s[i];
    let temp;

    if (map[curr] === undefined) { // if open symbol,
    //  push into stack
      stack.push(curr)
    } else { // if closed symbol
      // if stack is empty, push dummy value into stack as placeholder
      if (stack.length === 0) { stack.push('dummy')} else { temp = stack.pop(); }

    if (temp !== map[curr]) {return false}
    }
   }
    // at the end, return boolean based if stack is empty or not
    return (stack.length) ? false : true
}
