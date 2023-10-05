/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

// Approach 1
// function validAnagram(a, b){
//   // add whatever parameters you deem necessary - good luck!
//   if (a.length !== b.length) return false;// return false if strings lengths don't match
//   a = a.toLowerCase(); // change both strings to lowercase 
//   b = b.toLowerCase();
//   let hash = {};
  
//   for ( var char of a) {// iterate over first string
//       // add character to the hash map frequency
//       // or increment the frequency of that character if already exists
//       if (!hash[char]) {
//           hash[char] = 1
//       } else {
//           hash[char]++
//       }
//   }

//   for ( var char of b) { // iterate over second string
//       if (hash[char] > 1) {
//           hash[char]--
//       } else if (hash[char] === 1) {
//           delete hash[char]
//       } else {
//           return false
//       }
//   }
  
   
//   if (Object.keys(hash).length !== 0) {
//       return false
//   } else {
//       return true
//   }
//   // if there's a value other than one, decrease the value
//   // if value is one, delete the charatter
//       // else return false because of a different character existing
// }

// validAnagram("car", "car")
// Approach 2
var isAnagram = function(s, t) {
    // compare if s is an anagram of t
    // anagram = rearranged the letters, exactly once
    if (s.length !== t.length) return false;
    // create a hash map of letters from s
    let hash = {}
    s.split('').forEach((letter)=> hash[letter] ? hash[letter]++ : hash[letter] = 1)
    // { "a" : 2, "n": 1}
    // iterate over t
    for (let i = 0; i < t.length; i++){
        // if t is in hash, decrement by 1
        const letter = t[i]
        if (hash[letter]) { 
         hash[letter]-- 
        } else {
         return false
         }
    }
    return true
};


