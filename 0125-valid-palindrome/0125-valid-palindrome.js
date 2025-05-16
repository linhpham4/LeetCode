/**
 * @param {string} s
 * @return {boolean}
 */

var isAlpNum = function(char) {
    const regex = new RegExp (/[a-zA-Z0-9]/);
    return regex.test(char);
}
var isPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }

    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (!isAlpNum(s[l]) && l < r) {
            l++;
        }

        while (!isAlpNum(s[r]) && l < r) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;   
    }

    return true;
};