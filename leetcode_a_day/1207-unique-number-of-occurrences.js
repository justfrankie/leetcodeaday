/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
    // create a hash map variable
    let map = new Map();

    // iterate over arr and map each element into map
    arr.forEach((ele) => {
       return map.set(ele, (map.get(ele) || 0)+1)
    })

    // iterate over the results map to check if value is in hashmap
    let results = new Map();
    for (let [key, value] of map.entries()) {
        if (results.has(value)) {
            return false
        } else {
            results.set(value, true) // Map {'1', 1}
        }
    }
    // else return true
    return true
};
