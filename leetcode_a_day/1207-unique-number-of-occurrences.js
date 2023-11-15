/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Input: arr = [1,2]
// Output: false

var uniqueOccurrences = function(arr) {
    // create a hash map variable
    let hash = {};

    // iterate over arr
    for (let num of arr) {
        if (hash[num] !== undefined) {
        // if value exists, ++ increment the value on the key
            hash[num]++
        } else {
        // else set value of num key = 1
            hash[num] = 1
        }
    }
    // create a results hash map
    let results = []

    // iterate over the results map to check if value is in hashmap
        for (let occr in hash) {
        // returns false if value is in hashmap
            if (results.includes(hash[occr])) {
                return false
            } else {
                results.push(hash[occr])
            }
        }
        // return true outside
        return true
};
