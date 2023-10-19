/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // Approach 1: brute force two loops

    // if (nums.length < 3) {
    //     return (nums[0]-1) * (nums[1]-1)
    //  }
    // // brute force approach use two loops
    // let result = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if ((nums[j]-1) * (nums[i]-1) > result) {
    //             result = (nums[j]-1) * (nums[i]-1)
    //         }
    //     }
    // }
    // return result;

    // Approach 2: return largest two numbers from sorted array
    if (nums.length < 3) return (nums[0]-1) * (nums[1]-1) 
    const sorted = nums.sort((a, b) =>  a-b)
    return (sorted[sorted.length-1]-1) * (sorted[sorted.length-2]-1)
};
