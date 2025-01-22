/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 /**
     * Good------
     * Interesting edge cases
     * Brainstorm solutions before jumping in
     * Discussing time and space complexity
     * Look up syntax to save time
     * Catching mistakes early on
     * 
     * Work on--------
     * Review JS syntax for objects
     * Learn time and space complexities
     * Learn time complexities of built in certain JS operations (.keys(), .push(), .unshift(), .sort(), .length)
     * Abstraction of idea (helper function)
     * 
     * TO DO------
     * Practice this problem and last problem within 10 mins (implement all solutions)
     * Do next problem
     * 
     * 
     * Dog and God //true
     * Dog and Gold //False
     * aaa and aaaaa //false
     * "1" and "1" //true
     * "a-a" and "a--a" //false
     * "" and "" //true
     * " " and " " //true
     * "aab" and "abb" 
     * {a:2, b:1} and {a:1, b:2}
     * 
     * 
     * Two strings: S and T
     * Boolean output
     * True is S and T are anagrams, false otherwise
     * 
     * Time: O(n)
     * Space: O(n)
     * 
     * For n elements in hash table, a push operation to an array is done which takes constant time O(1)
     * O(n*1) = O(n)
     * 
     * 0(n) + O(n) (from the iteration code) = 0(2n) = O(n)
     * 
     * 
     * function (s, t) {
     *  Make hash tables from both strings with key being the letter and value being a counter(HashS and HashT)
     *      Iterate through string
     *          Check hashtable to see if letter is already key
     *              If not yet a key
     *                   Make a new key with value of 1
     *              If key already exist
     *                  Increase value by 1
     * 
     * If length of both hash tables are equal (use .keys(), and check length of the arrays)
     *      Iterate through HashS
     *          For each key, check HashT to see if it also contains that key
     *              Check if the count is the same
     *          If values differ
     *              Return false
     *      Return true
     * }

    isAnagram(s, t) {
        const hashS = {};
        const hashT = {};

        for (const letter of s) {
            if (hashS.hasOwnProperty(letter)) {
                hashS[letter] = hashS[letter]++
            } else {
                hashS[letter] = 1
            }
        }

        for (const letter of t) {
            if (hashT.hasOwnProperty(letter)) {
                hashT[letter] = hashT[letter]++
            } else {
                hashT[letter] = 1
            }
        }

        const arrS = Object.keys(hashS)
        const arrT = Object.keys(hashT)

        if (arrS.length !== arrT.length) {
            return false;
        }

        for (const letter of arrS) {
            if (hashT[letter] !== hashS[letter]){
                return false;
            }
        }

        return true;
    }
 */

 /*
Input: Two strings
Output: Boolean

Return true if strings are anagrams, otherwise false
Anagram = same string lengths, same unique characters, same amount of those characters
    
s = "won", t ="now" //true
s = "wool", t ="wow" //false
s = "1", t = "11" //false
s = " ", t = " " //true

Check if length of strings are equal
Iterate through strings to create hash tables {character: count}
Iterate through strings to check that hash tables contain all the same key-value pairs

Time: O(n+m)
Space: O(1)
 */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//             return false;
//     }

//     const hashS = {};
//     const hashT = {};

//     for (let i = 0; i < s.length; i++) {
//         hashS[s[i]] = (hashS[s[i]] || 0) + 1;
//         hashT[t[i]] = (hashT[t[i]] || 0) + 1;
//     }

//     for (const key in hashS) {
//         if (hashS[key] !== hashT[key]) {
//             return false;
//         }
//     }

//     return true;
// };

/*
Check that s and t are the same length
Split string, sort, then join
Compare sorted strings

Time: O(nlogn + mlogm)
Space: O(1)
*/
var isAnagram = function(s, t) {
    const sortedS = s.split("").sort().join("")
    const sortedT = t.split("").sort().join("")

    return sortedS === sortedT;
}