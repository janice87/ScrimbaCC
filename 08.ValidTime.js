function validTime(str) {
   let time = str.split(':')
   console.log(time) //["13", "58"]
   
   let hour = parseInt(time[0]) // parseInt to make it an integer 2 and not 02
   let mins = parseInt(time[1])
   
    if(hour < 0 || hour > 24){
        return false
    }
    if(mins < 0 || mins > 59){
        return false
    }
    return true
}



/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});