/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
 /*
 Iterate through indicies arr
    Find length of sources at i
    compare string at index to index+n to sources string
    if match
        replace char with target at i
 */
var findReplaceString = function(s, indices, sources, targets) {
    let newS = s.split("");

    for (let i = 0; i < indices.length; i++) {
        const index = indices[i]; //2
        const currSource = sources[i];  //"cd"
        const currTarget = targets[i]; //"ffff"
        let startIndex = index; //2

        if (s.substring(index, index + currSource.length) === currSource) { // "cd" === "cd"
            newS[index] = [currTarget]; // [["eee"], "b", ["ffff"], "d"]
            let replaceAmt = currSource.length - 1; // 1
            while (replaceAmt > 0) {
                startIndex++; // 3
                newS[startIndex] = ""; //[["eee"], "b", ["ffff"], ""]
                replaceAmt--; // 0
            }
        }
    }
    return newS.join("");
};