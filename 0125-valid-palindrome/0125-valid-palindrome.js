/**
 * @param {string} s
 * @return {boolean}
Input: string
Output: boolean
Return true if palindrome, otherwise false
Palindrome = reads the same forward and backward
Case-insensitive
Ignore non-alphanumeric characters

1. Non-alphanumeric char: "A-a" //true
2. Number as a string: "11" //true
3. Empty string: "" //true
4. One character string: "a" //true
5. Only non-alphanumerics: ".," //true

Reverse String-------
remove any characters that are not A-Z, a-z, or 0-9 >>> .replace()
change all letters to lowercase >>> .toLowerCase()
check if reverse of string is equal to string >>> .split().reverse().join()

Time: O(n) >>> all 5 methods require iteration through n elements of string or array
Space: O(n) >>> all 5 methods creates a copy of original or creates a new data structure

Two Pointers--------
compare letters with one pointer starting from the beginning and the other at the end checking if they're the same until pointers meet at the middle

Time: O(n) >>> left pointer iterates through 1st half of string and right iterates through 2nd half, effectively iterating through all n characters of string
Space: O(1) >>> toLowerCase() is called on individual characters of the string so it will not create new large data structures (temporary transformation applied to each character during the comparison)
 */

// var isPalindrome = function (s) {
//     const regex = /[\W_]/g;
//     const cleanedS = s.replace(regex,"").toLowerCase();
//     return (cleanedS === cleanedS.split("").reverse().join(""));
// };

var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    const regex = new RegExp(/[\W_]/);

    while (left < right) {
        while (left < right && regex.test(s[left])) {
            left++;
        }

        while (left < right && regex.test(s[right])) {
            right--;
        }

        if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}