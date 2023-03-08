/* Transform a given sentence into a new one with dashes between each two consecutive letters.

Example: For inputString = "abc caba" the output should be insertDashes(inputString) = "a-b-a c-a-b-a"

Hints: join(), split()
 */

// arr = "aba caba"
// returns "a-b-a c-a-b-a"
function insertDashes(arr) {
    return arr.split(" ") // ["aba", "caba"]
              .map(word => word.split("").join("-")) // [["a", "b", "a"], ["c", "a", "b", "a"]].join("-")
              .join(" ")          
}


/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});