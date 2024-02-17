/*Merge Sort
arr: Array []
returns: sorted Array []
*/ 

const mergeSort = (arr) => {
  if (arr.length <= 1) return [];

  const mid = Math.floor(arr.length/2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  // recursively sort each half;
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);
 
  // merge the sorted values;
  return merge(sortedLeft, sortedRight);
}
const merge = (left, right) => {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Push the remaining elements from left and right arrays
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

const arr = [1, 8, 4, 2, 3, 6, 7, 5]
console.log(mergeSort(arr));
