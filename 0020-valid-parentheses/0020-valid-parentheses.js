/**
 * @param {string} s
 * @return {boolean}
 */

 /*
    Input: string of bracket chars
    Output: Boolean (true if valid, false if not valid)

    Valid string:
    Opening bracket must be closed with the same type
    Correct order
    Close brackets must be paired with corresponding opening bracket

    1. One pair: "[]" //true
    2. Multiple types: "()[]" //true
    3. Nested brackets: "([])" //true
    4. Nested, but wrong order: "([)]" //false
    5. No close bracket: "(" //false
    6. No opening bracket: ")" //false
    7. Different types: "(]" //false
    8. Empty string: "" //false

    Brute Force-----------
    While valid bracket pairs remain, replace them with empty string
    
    Time: O(n^x)
    Space: O(n)

    Stack---------
    Create empty array
    Create hash table {closing bracket: opening bracket}
    Iterate through string, pushing open brackets into array
    If the character is a closing bracket
        If the current closing bracket is equal to last element of array, pop
        Otherwise return false
    After iteration: if array is empty, return true. Otherwise return false

    Time: O(n)
    Space: O(n)
*/

// var isValid = function(s) {
//     while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
//         s = s.replace("()", "").replace("[]", "").replace("{}", "");
//     }

//     return s === "";
// };

var isValid = function(s) {
    let stack = [];
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for (let i = 0; i < s.length; i++) {
        if (brackets.hasOwnProperty([s[i]])) {
            if (stack[stack.length-1] === brackets[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
}