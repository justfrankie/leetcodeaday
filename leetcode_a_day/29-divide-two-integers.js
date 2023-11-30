/**
29. Divide Two Integers

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:

Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.


Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Example 3:

Input: dividend = 0, divisor = 1
Output: 0
Example 4:

Input: dividend = 1, divisor = 1
Output: 1
 

Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0

 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// couldn't pass edge case, initial attempt


// var divide = function(dividend, divisor) {
//     let dividendNeg = dividend < 0 ? -1 : 1
//     let divisorNeg = divisor < 0 ? -1 : 1
    
//     dividend = Math.abs(dividend);
//     divisor = Math.abs(divisor);
//     let count = 0;
    
//   if (dividend === 0 || dividendNeg < divisorNeg) return 0;
//   if (divisor === -1 && dividend === -2147483648) return 2147483647;
//   // if (divisorNeg === 1) return divisor > 0 ? dividend : -dividend;
    
//     while(dividend >= divisor) {
//        dividend =  dividend - divisor
//         count++
//     }
    
//     count = (count * dividendNeg * divisorNeg)
//     return count
// };


// attempt from online resource

var divide = function(dividend, divisor) {
  var did = Math.abs(dividend);
  var dis = Math.abs(divisor);
  var sign = (divisor > 0 && dividend > 0) || (divisor < 0 && dividend < 0);
  var res = 0;
  var arr = [dis];

  if (dividend === 0 || did < dis) return 0;
  if (divisor === -1 && dividend === -2147483648) return 2147483647;
  if (dis === 1) return divisor > 0 ? dividend : -dividend;

  while (arr[arr.length - 1] < did) arr.push(arr[arr.length - 1] + arr[arr.length - 1]);

  for (var i = arr.length - 1; i >= 0; i--) {
    if (did >= arr[i]) {
      did -= arr[i];
      res += i === 0 ? 1 : 2 << (i - 1);
    }
  }

  return sign ? res : -res;
};
