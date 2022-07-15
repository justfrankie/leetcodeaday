/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
*/

var maxArea = function(height) {
    // early exit if height only has 2 values
    if (height.length < 3) {
        return Math.min(height[0], height[1])
    };
    // initial left, right, result values
    let i = 0, j = height.length-1, result = 0
    
    // use while loop to keep track of iterations, while left is smaller than right
    while(i < j) {
        let area = Math.min(height[i], height[j]) * (j-i);
      // compare the current area with the stored result area
        result = Math.max(result, area)
        // compare between left and right, smaller value gets moved respectively
        // left goes ++
        // right goes --
        height[i] <= height[j] ? i++ : j--;
    }
    return result
};


// input [1,8,6,2,5,4,8,3,7]
// output 49
