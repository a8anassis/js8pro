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

const activeUsers = users.filter(u => u.active )

const emails = users.map(user => user.email )       // ['andrew@gmail.com', 'niki20@gmail.com']

const numbers = [1, 2, 3, 4, 5, 4, 8, 4]
let sum = numbers.reduce((total, val) => total + val, 0)
let avg = numbers.reduce((total, val) => total + val, 0) / numbers.length

const findIndexes = (arr, num)  => 
    arr.reduce((indexes, el, index) => (el === num) ? [...indexes, index] : indexes, [])



