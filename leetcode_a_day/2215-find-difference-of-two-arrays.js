/**
2215. Find the Difference of Two Arrays

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

// Approach 1: two sets
var findDifference = function(nums1, nums2) {
    // create set1
    // create set2
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)


    for (num of nums1) {
        if (nums2.has(num)) {
            nums1.delete(num)
            nums2.delete(num)
        }
    }
   
    return [Array.from(nums1), Array.from(nums2)]
    // results array fill with results of set1, set2
};

// Approach 2: for loop push to new array
// var findDifference = function(nums1, nums2) {

//     // create set1
//     let set1 = [], set2 = []
//     // create set2

//     // create a variable for the longer list length
//     let long = nums1.length >= nums2.length ? nums1.length : nums2.length;
//     // iterate over length of the longer length
//     for (let i = 0; i < long; i++) {
//         // check if curr num1 exists AND whether if NOT exists in nums2
//         const num1 = nums1[i], num2 = nums2[i]
//         if (num1 !== undefined && !set1.includes(num1) && !nums2.includes(num1)) {
//             // set add nums1 num
//             set1.push(num1)
//         }
//          if (num2 !== undefined && !set2.includes(num2) && !nums1.includes(num2)) {
//         // else if curr num2 number exists AND whether if NOT exists in nums1
//             // set add nums2 num
//             set2.push(num2)
//         }
//     }

//     return [set1, set2]
//     // results array fill with results of set1, set2
// };
