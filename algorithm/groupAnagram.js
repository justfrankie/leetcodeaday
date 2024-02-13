// Group Anagram
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// iterate through each string
// add strings into a map 

const groupAnagrams = (strings) => {
    const map = new Map();
    
    for (const str of strings) {
        const sortedStrings = str.split('').sort().join('');
        
        // check if map has current sorted strings
        if (map.has(sortedStrings)) {
            map.get(sortedStrings).push(str);
        } else {
            // add sorted strings into map
            map.set(sortedStrings, [str]);
        }
    }
    
    // return the grouped sorted strings in an array
    return Array.from(map.values())
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
