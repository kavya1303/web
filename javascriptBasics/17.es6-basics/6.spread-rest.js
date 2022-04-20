/**
 *  ? ... (spread operator) - unpacks all the elements of the array
 *  ? ... (rest operator) - packs all the elements into array
 */

// spread
const odd = [1,3,5]
const combined = [2,4,6, ...odd]
console.log(combined)

// rest

function display(a,b, ...args){
    console.log(args)
}

display(1,2,3,4,5)

// Constrcut array literal 
let initialChars = ['A', 'B']
let allChars = [...initialChars, 'C', 'D']
console.log(allChars)

// Concatenation of arrays

let numbers = [1,2]
let moreNumbers = [3,4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers)

//copying an array
let scores = [80,70,90]
let copiedScores = [...scores]
console.log(copiedScores)

// spread operator on string 
let chars = ['A', ...'BC', 'D']
console.log(chars)