function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  
  if (arr.length === 0) return 0;
  let hashSet = {};
  let result = 0;
  
  for (let num in arr) {
      let cur = arr[num]
     if (!hashSet[cur]) {
         hashSet[cur] = 1
         result++
     }
  }
  return result
}

console.log(countUniqueValues([1, 2, 2, 2, 3, 4]))
