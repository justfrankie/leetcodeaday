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

// REACTO process
/*
- Repeat
- Example [1, 3, 5, 4] target = 5, return [0, 4] example [1, 2] 3 return the same array

    hash map: { // target is 5
    1: 4,
    3: 2,
    5: 0,
    4: 1
    }

    - Example [3, 2, 3] target = 6, return [0, 2]
    hash map: { // target is 6
    3: 0,
    2: 1,
    }


iterate over the array the second time, check each num for the difference in the hash
Approaches
    iterate over nums array, find difference between target and curr num
    if the difference is found in the hash, return that result
- Coding
    // early exit when length is itself and another number
    // create has map
    //iterate over nums array
    //check if hash has the difference between two numbers && can't be itself
        // return the pair of indicies
    // else create the hash key with current number, and value as the index
    // continue to next index
- Test
- Optimise
*/
