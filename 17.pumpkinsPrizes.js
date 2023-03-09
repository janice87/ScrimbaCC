/* Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// using flat method
function flatten(arr){
    return arr.flat()
}

// without using flat method
function flatten(arr){
    let finalArr = []
    
    for(let nestedArr of arr){                
        if(Array.isArray(nestedArr)){
            for(let item of nestedArr){
                finalArr.push(item)
            }
        } else {
            finalArr.push(nestedArr)
        }        
    }
    return finalArr
}

// using spread operator: https://www.samanthaming.com/tidbits/92-6-use-cases-of-spread-with-array/
// [ ...[1, 2, 3] ] // The dots erases the brackets

//   /*  Becoming this: */
//   [ 1, 2, 3 ] //  "Erased"

function flatten(arr){ 
    const finalArr = []

    arr.forEach(item => {
        Array.isArray(item) ? finalArr.push(...item) : finalArr.push(item)
    })
    return finalArr
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
