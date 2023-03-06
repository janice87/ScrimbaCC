/* Given an array of strings, sort them in the order of increasing lengths.
If two strings have the same length, their relative order must be the same as the initial array.

inputArray = ["abc", "", "aaa", "a", "zz"]
output should be: ["", "a", "aaa", "abc", "zz"]
*/

function sortByLength(strs) {
    return strs.sort((a, b) => a.length - b.length)
}

let strs = ["abc", "", "aaa", "a", "zz"]
console.log(sortByLength(strs))