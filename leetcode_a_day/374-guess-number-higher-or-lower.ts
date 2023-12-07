/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
    return recursiveGuess(1, n);
};

function recursiveGuess(a: number, b: number): number {
    const response = (a + b)/2
    // keep track of number if it's higher or lower than the response of guess
    if (guess(response) > 0) { 
    // if respones is -1
        // go this number divide by 2 rounded up
        return recursiveGuess(response+1, b)
    } else if (guess(response) < 0) {
        // if response is 1
        // multiply this number by 2
        return recursiveGuess(a, response-1)
    } else {
    // if response is 0
        // return the response
        return response
    }
};
