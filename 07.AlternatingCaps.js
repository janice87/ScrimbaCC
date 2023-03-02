/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
even #s are capitalized
*/

// using array
function altCaps(str){
    let newStr = str.split('')
    let finalStr = []

    for(let i = 0; i < newStr.length; i++){
        if(i % 2 === 0){
            finalStr.push(newStr[i].toUpperCase())            
        } else {
            finalStr.push(newStr[i])
        }
    }    
    return finalStr.join('');
}

// using string concatenation
function altCaps(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));