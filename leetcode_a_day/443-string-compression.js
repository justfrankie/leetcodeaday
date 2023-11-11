/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = chars => {
    let count = 1
    let iterate = 0
    for (let i = 0; i < chars.length; i++) { 
        if (chars[i] === chars[i + 1]) { 
            count++
        }
        else if (count === 1) { 
            chars[iterate++] = chars[i]
        }
        else if (count < 10) { 
            chars[iterate++] = chars[i]
            chars[iterate++] = count.toString()
            count = 1
        }
        else { 
            const s = count.toString().split('')
            chars[iterate++] = chars[i]
            for (let j = 0; j < s.length; j++) { 
                chars[iterate++] = s[j]
            }
            count = 1
        }
    }
    return iterate 
};
