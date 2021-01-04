/**

371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1

 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b!== 0) { // condition for loop iterations
        var c = a & b; // temporary variable to hold calculation of a & b binary bits
        a = a^b; // xor logical bit to find different bit
        b = c<<1; // b is re-stored into the sum of a & b, stored in temp variable c
    }
    return a;
};
