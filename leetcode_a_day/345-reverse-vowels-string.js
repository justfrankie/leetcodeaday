/**
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // create a map of vowels
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    vowels.forEach((vowel, index, arr)=> arr.add(vowel.toUpperCase()))
    // create an empty array of vowels
    let check = []
    let result = ''
    // iterate over s
    for (let i = 0; i < s.length; i++) {
        // check if current character is a vowel
        const char = s[i];
        if (vowels.has(char)) {
            // add the vowel into vowels array
            check.push(char)
        }
    }
    // iterate string
    for (let i = 0; i < s.length; i++) {
        // if current char is a vowel, replace the string with first letter of the array
        const char = s[i];
        if (vowels.has(char)) {
            // remove the first letter from the vowels array
            result+= check.pop()
        } else {
            result += char
        }
    }
       // return the result
       return result
};
