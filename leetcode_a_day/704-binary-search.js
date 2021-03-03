/**
704. Binary Search

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if (nums.length % 2 === 0) { // even amount of nums
            let left = Math.floor(nums.length/2)-1
            let right = Math.floor(nums.length/2)

             if (target < nums[left]) { // left side
            for (i = left; i >= 0; i--) {
               if (nums[i] === target) { return i};
            }
                 return -1
        } else if (target > nums[right]) { // right side
            for (j = right; j < nums.length; j++) {
               if (nums[j] === target) { return j }
            }
            return -1
        }
        if (nums[left] === target) { return left }
        else if (nums[right] === target)  { return right }
        
    } else { // odd amount of nums
        
       let middle = Math.floor(nums.length/2)
       
        if (target < nums[middle]) { // left side
            
        for (i = middle; i >= 0; i--) {
           if (nums[i] === target) { return i};
        }
            return -1
            } else if (target > nums[middle]) { // right side
                for (j = middle; j < nums.length; j++) {
                   if (nums[j] === target) { return j }
                }
                return -1
            } else if (target === nums[middle]) {
            return middle  // return index of target
                } else {
                    return -1
                }
        }

};
