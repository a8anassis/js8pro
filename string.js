let str = "Coding Factory"
console.log(...str)     // 


// parse
// let s1 = str.substring(1, 5)    // odin
// let s2 = str.slice(1, 5)        // odin
// let s3 = str.slice(-5)          // ctory


// // split
// let tokens = str.split(/\s+/)     // RegEx   ['Coding', 'Factory']
// console.log(tokens)

// // strings are char arrays
// console.log(str.charAt(0))              // C
// let index = str.indexOf('o')            // 1
// if (index !== -1) {
//     console.log(`Found at position ${index}`)
// } else {
//     console.log('Not found')
// }

// let index2 = str.lastIndexOf('o')       // 11

// // Equality
// let str1 = "Athens"
// let str2 = "ATHENS"
// if (str1 === str2) {
//     console.log("Equal")
// } else {
//     console.log('Not Equal')
// }

// // case insensitive
// if (str1.toUpperCase() === str2.toUpperCase()) {        // normalization
//     console.log("Equal")
// } else {
//     console.log('Not Equal')
// }

// // trim
// let aString = "   Coding "
// let trimmed = aString.trim()

// // concat με + ή/και .concat()
// let concatenated = str1 + str2 + aString

// // RegEx

// // Validation
// let strInput = 'Hello all'
// if (/hello/i.test(strInput)) {           // regex.test()  i is ignore case
//     console.log("match found")
// } else {
//     console.log('No match found')
// }

// // g is global flag δηλ. ελέγχει όλο το string για matches 
// // και η matches επιστρέφει όλα τα matches σε πίνακα
// let manyTokens = 'world watch hello'
// const regex = /w\w+/g
// let matches = manyTokens.match(regex)   // ['world', 'watch']
// console.log(matches)

// // g is global flag δηλ. ελέγχει όλο το string για matches
// // και η exec επιστρέφει ένα-ένα τα matches
// let match
// while ( (match = regex.exec(manyTokens)) !== null) {
//     console.log(`Found '${match}' at index ${match.index}`)
// }

// function isStrongPassword(password) {
//     return /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[\W_])^.{8,}$/.test(password)
// }

