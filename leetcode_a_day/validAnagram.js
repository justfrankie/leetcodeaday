function validAnagram(a, b){
  // add whatever parameters you deem necessary - good luck!
  if (a.length !== b.length) return false;// return false if strings lengths don't match
  a = a.toLowerCase(); // change both strings to lowercase 
  b = b.toLowerCase();
  let hash = {};
  
  for ( var char of a) {// iterate over first string
      // add character to the hash map frequency
      // or increment the frequency of that character if already exists
      if (!hash[char]) {
          hash[char] = 1
      } else {
          hash[char]++
      }
  }

  for ( var char of b) { // iterate over second string
      if (hash[char] > 1) {
          hash[char]--
      } else if (hash[char] === 1) {
          delete hash[char]
      } else {
          return false
      }
  }
  
   
  if (Object.keys(hash).length !== 0) {
      return false
  } else {
      return true
  }
  // if there's a value other than one, decrease the value
  // if value is one, delete the charatter
      // else return false because of a different character existing
}

validAnagram("car", "acr")
