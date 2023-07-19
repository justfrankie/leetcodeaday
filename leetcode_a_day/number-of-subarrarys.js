/**
Given an array of _n _integers, and a required sum _k, _find the number of subarrays whose sum is equal to the required sum. A subarray is a contiguous segment of an array.

Example

arr = [1, 2, 3, 0]

k = 3

There are 3 subarrays whose sum is equal to 3. These are: [1, 2], [3], [3, 0]. Thus, the answer is 3.

Function Description

Complete the function countNumberOfSubarrays in the editor below.

countNumberOfSubarrays has the following parameters:

    int arr[n]: the given array of integers

    _int k: _the required sum

Returns

**    **_long_int: _the number of subarrays with sum equal to k.

Constraints

1 ≤ _n _≤ 105
-109 ≤ _arr[i] _≤ 109
_-_109 ≤ k ≤ 109
**/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countNumberOfSubarrays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function countNumberOfSubarrays(arr, k) {
    // Write your code here
    // [1, 2, 3, 0]
    // [0, 0, 0, 1]
    
    // create count variable = 0
    let count = 0;
    // iteration 1: 1, less than target (k))
    for (let a = 0; a < arr.length; a++){
        // create pointer a as arr[i]
        // create a second loop, with b as the second pointer
        let accurred = 0;
        for (let b = a; b < arr.length; b++) {
        // move the variable b down the subsequent numbers, keep adding to the current value as long as its below to k
        accurred += arr[b]
    if (accurred === k) {
            count++
        }
        }
        // outside of the while loop, if results = k, add count ++
    }
    // return count
    return count
}

// [1]
// [1,2] count ++
// [3]
// [3, 0] count ++ 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = countNumberOfSubarrays(arr, k);

    ws.write(result + '\n');

    ws.end();
}
