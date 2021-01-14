/**

18. 4Sum

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Notice that the solution set must not contain duplicate quadruplets.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:

Input: nums = [], target = 0
Output: []
 

Constraints:

0 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109

 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];

  var len = nums.length;
  var res = [];
  var l = 0; // left pointer
  var r = 0; // right pointer
  var sum = 0;

  nums.sort((a, b) => (a - b));

  for (var i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; //if current num is same as last num-- skip
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break; // next loop if sum of next 3 nums is >  target
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue; // else only continue when current num - previous 3 num < target

    for (var j = i + 1; j < len - 2; j++) { // second loop
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // optimization
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break; // if pointer one + pointer 2 3 4 > target-- skip
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue; // continue of pointer one + pointer two, and two numbers counting from back is less than target

      l = j + 1;
      r = len - 1;

      while (l < r) {
        sum = nums[i] + nums[j] + nums[l] + nums[r];

        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]); // add valid numbers to result array
          while (l < r && nums[l] === nums[l + 1]) l++; // move along if duplicate numbers
          while (l < r && nums[r] === nums[r - 1]) r--; 
          l++;
          r--;
        }
      }
    }
  }

  return res;
};

// find numbers that add up to 0 in the answer set

// nums = [1,0,-1,0,-2,2] target = 0
// [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


    // dynamic programming potentially?
    // sort the numbers  [1, 0, -1, 0, -2, 2]
    // sorted = [-2, -1, 0 , 0, 1, 2]
    // has duplicates numbers in array
    // pointers moving from both ends of array
    // i = 0, l = -2, r = 2 sum is target


// -2 + 2 + 1 + (-1) false
// -2 + 2 + 0 + 0 true push to result array
// reach middle, go to next iteration
// -1 + 1 + 0 + 0 true push to result array
// 
