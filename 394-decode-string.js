/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
    // create stack
    let stack = [];
    
    // iterate over string
    for (let char of s) {
        // if char isn't "["
        if (char !== ']') {
            // push char into stack
            stack.push(char);
        } else {
            // else 
                // build encoded string
                // build repeated string
            let encodedString = '';
            let repeatedString = '';
            
            // while there is string in stack and NOT [
            while (stack.length && stack[stack.length - 1] !== '[') {
                // pop chars off until finding the "[" to get encoded substring
                encodedString = stack.pop() + encodedString;
            }
            stack.pop(); // Pop '['
            
            // pop characters off until finding a non-digit char for the repeated string
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                repeatedString = stack.pop() + repeatedString;
            }
            // convert the repeated count number into an int
            repeatedString = parseInt(repeatedString);
            // push the encoded string into the stack X amount of times
            stack.push(encodedString.repeat(repeatedString));
        }
    }
        // join the decoded strings from the stack
        // return the decoded strings
    return stack.join('');
}
