/*
442. Find All Duplicates in an Array
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []
 

Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // early exit cases
    // if input length is 1 return []
    if (nums.length === 1) {
        return []
    // if input length is 2 AND first and second num are different, return []
    } else if (nums.length === 2 && nums[0] !== nums[1]) {
        return []
    }

    // create tracking array variable
    let result = [];
    // create hash map to keep track of iterated numbers
    let hash = {};
    
    // iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // if the current num cannot be accessed as a key in the hash map
        if (hash[nums[i]] === undefined) {
            //set the num as key and value as num in hashmap (or could be anything)
            hash[nums[i]] = nums[i];
        } else {
        //else push the num into the result array
            result.push(nums[i])
        }
    }
    // return result array
    return result;
};
  
