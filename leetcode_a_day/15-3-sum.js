/**
15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105

 * @param {number[]} nums
 * @return {number[][]}
 */
 
 
var threeSum = function(arr) {
    arr.sort((a, b) => { // first sort numbers in order
        return a - b;
    });
    
    let result = [];
    
    for (let indexA = 0; indexA < arr.length; indexA++) {
        let indexB = indexA + 1;
        let indexC = arr.length - 1;
        
        if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue; // skips over duplicate number
        
        while (indexB < indexC) { // two pointer iteration
            
            let sum = arr[indexA] + arr[indexB] + arr[indexC]; // instantiation of triple sum;
            
            if (sum < 0) {
                indexB++;
            } else if (sum > 0) {
                indexC--;
            } else {
                result.push([arr[indexA], arr[indexB], arr[indexC]]); // pushed found set of solution!
                
                while(arr[indexB] === arr[indexB + 1]) indexB++; // skips duplicates for pointer B
                while(arr[indexC] === arr[indexC - 1]) indexC--; // skips duplicates for pointer C
                
                indexB++;
                indexC--;
            }
        }
    }
    
    return result;
};
