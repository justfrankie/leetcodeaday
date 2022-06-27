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

function findRepeat(numbers) {
    if (numbers.length < 2) {
      throw new Error('Finding duplicate requires at least two numbers');
    }
  
    const n = numbers.length - 1;
    const sumWithoutDuplicate = (n * n + n) / 2;
    const actualSum = numbers.reduce((acc, cur) => acc +  cur, 0);
  
    return actualSum - sumWithoutDuplicate;
  }

  let assertEquals = (actual, expected, message) => {
    // if (actual.length !== expected.length ) return false;
      if (parseInt(actual) !== parseInt(expected)) {
        console.log(`X - FAILED Actual: ${actual} Expected: ${expected}!`);
        return;
      } else {
        console.log(`PASSED! ${message} PASSED! `);
        return;
      }
  };
  
  assertEquals(findRepeat([1, 2, 2, 3, 4]), 2, "Should return 2");
  assertEquals(findRepeat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]), 10, "Should return 10");
  
