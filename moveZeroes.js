// given an array, move zeroes to the end of the array with non-zero numbers 
// remain in relative position


let moveZeroes = (arr) => {
   let nextNonZero = 0; // create nextNonZero variable as tracker

   for (let i = 0; i < arr.length; i++) { // iterate over arr
       if (arr[i] != 0) { // if current number is a non-zero, 
       arr[nextNonZero] = arr[i]; // replace array at nextNonZero index
         nextNonZero++; // increment nextNonZero by one
      } 
   }
   
   for (let i = nextNonZero; i < arr.length; i++){ // replace all the values starting from nextNonZero with zeroes
    arr[i] = 0;
   }
}

let test = [0, 1, 0, 3, 12]

moveZeroes(test)
console.log(test) // outputs [1, 3, 12, 0 , 0]

let test2 = [1, 2, 3, 4, 5]
moveZeroes(test2)
console.log(test2) // outputs [1, 2, 3, 4, 5]
