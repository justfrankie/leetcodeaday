/*
33. Search in Rotated Sorted Array

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

var search = function(nums, target) {
    // if nums has only one number and it isn't target, early exit
    if ((nums.length < 2 && nums[0] !== target)) {
        return -1
    }
    
    // create left & right index tracker
    let left = 0;
    let right = nums.length - 1;
    
    // search for pivot:
    while (left < right) {
        // create midpoint index
        const mid = Math.floor((left+right)/2) 
    
        // check if midpoint index is the target
        if(nums[mid] === target) {
            return mid
        }
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
  
    //BST portion
    let pivot = left;
    left = 0;
    right = nums.length - 1;
    
   // choose right subarray
    if (nums[pivot] <= target && target <= nums[right]) {
        left = pivot;
    } else {
        // set for left subrarray
        right = pivot
    }
    
     while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid]<target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

/*
Repeat
Example:
     [6, 7, 8, 9, 10, 4, 5] target = 5, returns 6
Approach: 
    1. find pivot
        - initialize left & right index as 0, nums,length -1
        - split array into halfway point with mid index
        - use while loop to compare the two adjacent values
          - if middle number is greater than right number
            - shift pivot to the right +1
         - otherwise shift pivot to the left
        
    2. use pivot as insert point for BST
        - re-initialize left pointer as 0
        - re-initialize right pointer as last index
        - decide which side subArray to start with pivot
            - right subArray = nums[pivot] < target
                - set left = pivot
                - otherwise, set right = pivot
        - use while loop to compare values around midpoint of subArray 
            - return mid point
            - if check for nums[mid] < target
                - set left = mid + 1
                otherwise, set right = mid -1
Code
Test
Optimise
*/
