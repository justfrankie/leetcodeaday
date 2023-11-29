/**
238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // use reduce to calculate the total product of the nums from array
    const total = nums.reduce((accum, initial)=> initial * accum, 1)
    const result = [];
        // iterate over nums
        for (let i = 0; i < nums.length; i++) {
            // remove the product of itself from the total product
            const cur = nums[i]
           if (cur === 0){ 
               const copy = [...nums]
               copy.splice(i, 1)
               const newTotal= copy.reduce((a, b)=> a * b, 1)
               result.push(newTotal)
               } else {
                result.push(total/cur)
           }
        }

    return result
};
