/**
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const map = {};
    
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i] ]>=0){ // check if there's a complementary numbers' index stored
            return [ map[nums[i] ] , i ]
        }
        map[target-nums[i]] = i // stores complementary number's index in map instead
    }
};

// second approach, uses map data structure

// var twoSum = function(nums, target) { // hash map one pass
//      let map = new Map; // create new map structure
    
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i]; 
        
//         if (map.has(complement)) { // look for the complementary number as passes through
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i); // otherwise, set nums with current index
//     }
// }
