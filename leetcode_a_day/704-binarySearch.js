/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if (nums.length % 2 === 0) { // even amount of nums
            let left = Math.floor(nums.length/2)-1
            let right = Math.floor(nums.length/2)

             if (target < nums[left]) { // left side
            for (i = left; i >= 0; i--) {
               if (nums[i] === target) { return i};
            }
                 return -1
        } else if (target > nums[right]) { // right side
            for (j = right; j < nums.length; j++) {
               if (nums[j] === target) { return j }
            }
            return -1
        }
        if (nums[left] === target) { return left }
        else if (nums[right] === target)  { return right }
        
    } else { // odd amount of nums
        
       let middle = Math.floor(nums.length/2)
       
        if (target < nums[middle]) { // left side
            
        for (i = middle; i >= 0; i--) {
           if (nums[i] === target) { return i};
        }
            return -1
            } else if (target > nums[middle]) { // right side
                for (j = middle; j < nums.length; j++) {
                   if (nums[j] === target) { return j }
                }
                return -1
            } else if (target === nums[middle]) {
            return middle  // return index of target
                } else {
                    return -1
                }
        }

};
