let unsortedArr = [10, 5, 9, 7, 10, 1, 2, 5, 4];

let swapped;
let temp;

function bubbleSort(arr) {
  swapped = false;
  let end = arr.length-1;
  
  for (let i = 0; i < end; i++) {
    if (arr[i] > arr[i+1]) {
      swapped = true;
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i + 1] = temp;
    }
  }
  end--;
}

while(swapped) {
  bubbleSort(unsortedArr) 
}

console.log(unsortedArr); // outputs sorted array
