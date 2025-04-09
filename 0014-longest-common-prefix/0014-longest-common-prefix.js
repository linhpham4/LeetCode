/**
 * @param {string[]} strs
 * @return {string}

 Input: array of strings
 Output: longest common prefix, if none return ""

Create variable to keep track of possible common letters
 Iterate through first 2 strings to compare letters
 - If first letter of strings are different, return ""
 - If first letter are same, continue until letters are different (while updating common letter variable)
 Iterate through the rest array to check if common prefix in those words
    - Check until difference in letters then take out difference in variable

 Time: O(n)
 Space: O()
 */
// var longestCommonPrefix = function(strs) {
//     if (strs.length < 2) {
//         return strs[0];
//     }

//     let commonPre = [];

//     for (let i = 0; i < strs[0].length; i++) {
//         const firstWord = strs[0];
//         const secondWord = strs[1];

//         if (firstWord[i] === secondWord[i]) {
//             commonPre.push(firstWord[i]);
//         } else if (commonPre === []){
//             return "";
//         } else {
//             break;
//         }
//     }
//  //commonPre = ["f", "l", "o", "w"]
//     for (let i = 2; i < strs.length; i++) {
//         for (let j = 0; j < commonPre.length; j++) {
//             const currentWord = strs[i];
//             if (currentWord[i] !== commonPre[i] && i === 0){
//                 return "";
//             } else if (currentWord[i] !== commonPre[i] && i > 0){ 
//                 return commonPre.splice(0, i).join("");
//             } else {
//                 continue;
//             }
//         }
//     }

//     return commonPre.join("");
// };

var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        const currStr = strs[i];
        while (pref !== currStr.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;
}