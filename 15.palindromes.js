/* Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    let revStr = str.split("").reverse().join("")
    return str === revStr ? true : false 
}

// using pointers
// function isPalindrome(str){
//     let begIdx = 0
//     let endIdx = str.length - 1

//     while(begIdx < endIdx){
//         if(str[begIdx] === str[endIdx]){
//             begIdx++
//             endIdx--
//         } else {
//             return false
//         }
//     }
//     return true
// }

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));