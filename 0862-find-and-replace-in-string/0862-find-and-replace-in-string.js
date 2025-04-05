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
        const index = indices[i]; 
        const currSource = sources[i]; 
        const currTarget = targets[i];
        let startIndex = index;

        if (s.substring(index, index + currSource.length) === currSource) {
            newS[index] = [currTarget];
            let replaceAmt = currSource.length - 1;
            while (replaceAmt > 0) {
                startIndex++;
                newS[startIndex] = "";
                replaceAmt--;
            }
        }
    }
    return newS.join("");
};