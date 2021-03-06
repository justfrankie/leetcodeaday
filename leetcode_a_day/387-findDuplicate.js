/*

287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Follow-ups:

How can we prove that at least one duplicate number must exist in nums? 
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [1,1]
Output: 1
Example 4:

Input: nums = [1,1,2]
Output: 1

 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  let seen = new Set(); // sets cannot have duplicates

  for (index in nums) { // iterate over nums array to check which num Set already has
    if (seen.has(nums[index])) {
      return nums[index]; // return the answer once found duplicate
    } else {
      seen.add(nums[index]); // add num to set
    }
  }
};

// JS SORT SOLUTION
// var findDuplicate = function(nums) {
// let sorted = nums.sort((a, b) => a - b)

//  for (let i = 0; i < sorted.length; i++) { // iterate over array of numbers
//     if (sorted[i] == sorted[i+1]) { return sorted[i]}}// use IndexOf on the current number to look inside a copy slice of the rest of the array
// };

// NATIVE SORT SOLUTION
// var findDuplicate = function(nums) {
//     nums = nums.sort();
//   for (let i = 0; i < nums.length; i++){

//    if (nums[i] == nums[i+1]) { return nums[i] }

//   }
//     return "nothing found"
// };
