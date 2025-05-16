/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let stack = [];
    const types = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        const currBracket = s[i];
        if (types[currBracket]) {
            if (types[currBracket] === stack[stack.length-1]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(currBracket);
        }
    }

    return stack.length === 0;
};