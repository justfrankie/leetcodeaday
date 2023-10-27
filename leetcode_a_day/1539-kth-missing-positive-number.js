/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // initialize hashmap
    const hashMap = new Map();

    // map array each value to hashmap element as key => as value
    arr.map((num, index) => hashMap.set(num, 1))
    // 1 as value bc hashMap.get(element) if is undefined or 0 or null, are all false
        
    // set counter and number to 0
    let counter = 0, number = 0;

    // while loop counter < k
    while (counter < k) {
        // number++
        number++
        // check if hashMap has that number
        if (!hashMap.get(number)){
        // counter++ while check count == k
        counter++
            // if true, then return the number
        if (counter === k) return number
        }
    }
};
