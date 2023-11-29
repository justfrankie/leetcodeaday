/**
152. Maximum Product Subarray

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
   if (nums == null || nums.length == 0) {
            return 0;
        }
        let length = nums.length;
        let prefixProduct = 0;
        let suffixProduct = 0;
        let result = nums[0];
        // [2,3,-2,4]
        // 4
        // prefix start from i = 0
        // suffix start from i = 3 = length - i - 1
        for (let i=0; i<length; i++) {
            prefixProduct = (prefixProduct == 0 ? 1 : prefixProduct) * nums[i];
            suffixProduct = (suffixProduct == 0 ? 1 : suffixProduct) * nums[length - i - 1];
            result = Math.max(result, Math.max(prefixProduct, suffixProduct));
        }
        return result;
};
