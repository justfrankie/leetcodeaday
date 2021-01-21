/**

7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1

 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if (x === 0) {
     return 0
    } else if ( x <= -2147483648 || x >= 2147483648) {
        return 0
    }
    
    x = Math.floor(x);
    
    let result = ''; // create result string
    let isNegative = false;
    let removeZero = false;
    let stringNum = x.toString();
    
    if (x < 0) {  // if negative, the negative sign should still be in the front
       isNegative =  true;  //later added to result
    }
    if (x % 10 === 0) { // if number ends with a 0, then the zero should be dropped
      removeZero = true;  // check if the number is divisible by % 10 === 0
    }
    
    for (let i = stringNum.length - 1; i >= 0; i--) { // turn number into string to iterate over
       result += stringNum[i]; // add the number to a string backwards
    }
    
    if (removeZero) {
       result = result.substr(1) // returns the string without the 0
    }
    
    if  (result > 2147483648) { return 0 }
    
    if (isNegative) {
       result = '-'+ result
        if (parseInt(result) < -2147483648) {return 0}
        return (parseInt(result))
    } else {
        return parseInt(result) // return the result string with negative symbol depending on condition
    }
    return 0
};
