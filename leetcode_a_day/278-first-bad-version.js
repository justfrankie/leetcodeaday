/**
278. First Bad Version
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // use binary search to find the bad version
        // create while loop to continually run the binary split
        let low = 1;
        let high = n;
        while (low <= high) {
        // check middle number if its bad
        const middle = Math.floor((low+high)/2)
        const isMiddleBad = isBadVersion(middle)

            if (isMiddleBad) {
                high = middle-1;
            } else {
                low = middle+1;
            }
        }

        // return the index of the first bad version aka low
        return low;
    };
};
