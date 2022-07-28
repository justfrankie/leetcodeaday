/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  nums.sort((a, b) => (a - b));
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};

/** [1, 0, -1] output [[1, 0, -1]]
    [-1, 0, 1, 2,-1,-4] [[-1,0,1], [-1,-1,2]]
{
-1: [0, 4]
0: [1]
1: [2]
}
   
    create result array
    iterate over input array
        iterate second time to check
        sum two numbers up 
        find the inverse of the sum
        check if inverse is in the map
            push solution set up if found
    
    return result array
**/

