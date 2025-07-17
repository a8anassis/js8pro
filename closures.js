function createCounter() {
    let count = 0;      //private state

    return {
        increment : function increment() {
            count++
        },

        getCount:  function getCount() {
            return count
        }
    } 
}

const counter = createCounter()
counter.increment()     // 1
counter.increment()     // 2
console.log(counter.getCount())



function calculator() {
    let memory = 0

    return function add(a, b) {
        memory = memory + a + b
        return memory
    }
}

const myAdd = calculator()
console.log(myAdd(3, 10))
console.log(myAdd(10, 30))

// Not this, υπάρχει closure και επομένως
// οι inner functions έχουν πρόσβαση στο private
// state - outer state 
// variables are private by default
// private & public API

function calculator2() {
    let memory = 0

    return {
        add: function(a, b) {
            memory = memory + a + b
            return memory
        },

        sub: function(a, b) {
            memory = a - b;
            return memory;
        } 
    }
}

let calc = calculator2()
console.log(calc.add(5, 6))
console.log(calc.sub(10, 2))