/**
137. Single Number II


Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

 Example 1:

Input: nums = [2,2,3,2]
Output: 3
Example 2:

Input: nums = [0,1,0,1,0,1,99]
Output: 99
 

Constraints:

1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
 
 
 * @param {number[]} nums
 * @return {number}
 */

// initial attempt
// var singleNumber = function(nums) {
//     let map = {}
    
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
        
        
//         if (!map[num]) {
//             map[num] = 1
//         } else {
//             map[num]++
//         }
        
//     }
    
//     for (num in map) {
//         if (map[num] === 1) {
//             return num
//         }
//     }
// };

var singleNumber = function(nums) {
   for(var i = 0; i < nums.length; i++){
		x = nums.indexOf(nums[i]);
		y = nums.lastIndexOf(nums[i]);
		if(x == y)
			return nums[i];
   }
};
