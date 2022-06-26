/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     // early exit length < 2
//     if (nums.length < 2) {
//         return false
//     }
    
//     // create hash map for unique keys
//     const hash = {};
    
//     // iterate over nums arr
//     for (let i = 0; i < nums.length; i++) {
//         // if current num exists in the hash map
//         if (hash[nums[i]] !== undefined) {
//             return true
//         }
//         // store current number into hash map
//         hash[nums[i]] = nums[i]
//     }
    
//     // outside of iteration
//     return false 
// };

var containsDuplicateUsingSet = function(nums) {
    // early exit length < 2
    if (nums.length < 2) {
        return false
    }
    
    // create hash map for unique keys
    const set = new Set();
    
    // iterate over nums arr
    for (let i = 0; i < nums.length; i++) {
        // if current num exists in the set map
        if (set.has(nums[i])) {
            return true
        }
        // store current number into set map
        set.add(nums[i])
    }
    
    // outside of iteration
    return false 
};


/*
Repeat
Examples
Input: [1, 2, 3, 5, 1] returns true
Input [1] return false
Ask questions?
Code
Test
Optimize: use built in JS hash map
Optimize: use two pointers 
*/
