/**
2390. Removing Stars From a String

 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = []
    s.split('').forEach((c)=> c === '*' ? stack.pop() : stack.push(c))

    return stack.join('')
};
