const arr1 = []
const arr2 = [1, 2, 3, 4, 5]
const arr3 = new Array(5).fill(0)       // [0, 0, 0, 0, 0] otherwise [undefined, undefined, undefined, undefined, undefined]

const arr = [...arr1, arr2]             // spread operator gives a shallow copy

//Array methods
console.log(arr2.length)
console.log(arr2[0])
console.log(arr2[arr2.length - 1])

// Joins an array with a delimiter and returns a string
console.log(arr2.join(','))         // επιστρέφει string

// Traverse
// Classic for 
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// Enhanced for with for .. of
for (let item of arr2) {
    console.log(item)
}

// Functional way, not iterative (είναι μέθοδος, μέσα υποκρύπτεται η for)
arr2.forEach((val, index) => {
    console.log(`Value: ${val}, index: ${index}`)
})


