const students = ['Νίκη', 'Ανδρέας', 'Γιάννη']

students.forEach(function(stu) {
    console.log(stu)
})

students.forEach(function(stu, index, arr) {
    console.log(index, stu, arr)
})

students.forEach((val, index) => {
    console.log(index, val)
})

students.forEach(function(stu, _, arr) {
    console.log(stu,  arr)
})


// Filter
let filtered = students.filter((stu) => stu === 'Γιάννης' )

const users = [ 
    { firstname: "Ανδρέας", age: 25, active: true, email: "andrew@gmail.com"}, 
    { firstname: "Νίκη", age: 20, active: false, email: "niki20@gmail.com"}
]

// Filter
const activeUsers = users.filter(u => u.active )

// Map
const emails = users.map(user => user.email )       // ['andrew@gmail.com', 'niki20@gmail.com']

// Reduce
const numbers = [1, 2, 3, 4, 5, 4, 8, 4]
let sum = numbers.reduce((total, val) => total + val, 0)
let avg = numbers.reduce((total, val) => total + val, 0) / numbers.length

const findIndexes = (arr, num)  => 
    arr.reduce((indexes, el, index) => (el === num) ? [...indexes, index] : indexes, [])

// Find and FindIndex
// find returns a value, not an array
const user = users.find(user =>  user.email === 'andrew@gmail.com' )            // { firstname: "Ανδρέας", age: 25, active: true, email: "andrew@gmail.com"}

const userIndex = users.findIndex(user =>  user.email === 'andrew@gmail.com' )  // 0


// Some and Every
const isOver24 = users.some(user => user.age >= 24)     // true
const isAllOver18 = users.every(user => user.age > 18)  // true  

// Flatmap
const result = users.flatMap(user => [user, user.age / 2])  // [ {}, 12.5, {}, 10 ]



