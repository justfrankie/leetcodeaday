/**
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 */

// initial brute force O(n) solution
// var searchInsert = function(nums, target) {
//     // target variable = either ends of the numbers
//     if (nums.includes(target)) {
//     return nums.indexOf(target);
//   }
//     if (nums[0] > target) return 0
//     if (nums[nums.length-1] < target ) return nums.length
//     // [1, 2, 3, 4, 5] target = 4, return 4
//     // iterate over the array of nums to search and insert into the target
//     for (let i = 0; i < nums.length; i++) {
//         const curr = nums[i]
//         const nextElement = nums[i+1]
//         if (target >= curr && target <= nextElement) {return i+1 }
//     }
// };

 // binary tree search solution:
    var searchInsert = function(nums, target) {
        let low = 0, hi = nums.length;
        while (low < hi) {
            let mid = low + Math.floor((hi-low)/2);
            if (target > nums[mid]) {
                low = mid + 1
            } else {
                hi = mid
            }
        }
        return low
};
