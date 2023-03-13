/* Given a year, return the century it is in. The first century spans from the year 1 ip to and including the year 100,
the second - from the year 101 up to and including the year 200, etc.

Example:
For year = 1905, the output should be centuryFromYear(year) = 20
For year = 1700, the output should be centuryFromYear(year) = 17
*/

function centuryFromYear(num) {
    return Math.ceil(num / 100)
}

// The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
//console.log(Math.ceil(.95));
// Expected output: 1

//console.log(Math.ceil(4));
// Expected output: 4

//console.log(Math.ceil(7.004));
// Expected output: 8


/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});