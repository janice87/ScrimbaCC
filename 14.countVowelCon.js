/*  You are given a string s that consists of only lowercase English letters.
If vowels are given a value of 1 and constants are given a value of 2, return the sum of all of the letters in the input string.

Example: For s = "abcde" the output should be countVowelConstant(s) = 8

Hints: 
split()
reduce()

reduce returns a single value and needs an initial value

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); // false
*/

function countVowelConsonant(str) {
    let vowels = ["a", "e", "i", "o", "u"]
    let strArr = str.split("") // ['a', 'b', 'c', 'd', 'e']

    let sum = strArr.reduce((acc, val) => {
        if(vowels.includes(val)) {
            return acc += 1
        } else {
            return acc += 2
        }
    }, 0)
    return sum
}

// without using reduce
function countVowelConsonant(str) {
  let vowels = ["a", "e", "i", "o", "u"] 
  let strArr = str.split("") // ['a', 'b', 'c', 'd', 'e']
  let sum = 0

  for(let letter of strArr) {   
    if(vowels.includes(letter)){
        sum += 1
    } else {
        sum +=2
    }
  }
 return sum  
}

/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});