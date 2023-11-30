/**

845. Longest Mountain in Array

You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
 

Follow up:

Can you solve it using only one pass?
Can you solve it in O(1) space?

 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let mountainLength = 0;
    
    for (let i = 0 ; i < arr.length; i++){ // iterate over arr
       if (arr[i-1] < arr[i] && arr[i+1] < arr[i]) { // if previous num is less than curr && next num is more than curr CLIMB >>
           let left = i - 1;
           let right = i + 1;
         while (left > 0 && arr[left-1]  < arr[left]) {
          left--;
         }
        while ( right < arr.length-1 && arr[right+1] < arr[right]) {
            right++;
       }
        mountainLength = Math.max(mountainLength, right-left+1);
     }
    }
    return mountainLength;
};  
