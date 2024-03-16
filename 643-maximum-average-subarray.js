/**
643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
  let sum = nums.slice(0, k).reduce((acc, num)=> acc + num, 0);
  // set up max as math -99999
  let max = sum/k;

for (let i = k; i < nums.length; i++) {
        //Calculate the new sum by subtracting the current num, and adding the new num
        sum = sum - nums[i - k] + nums[i];
        // max = math max between max and avg
        max = Math.max(max, sum / k)
    }   
    // return max
    return max
};
