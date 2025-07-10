// if value is falsy -> emoji (\uD83E\uDD25) Falsy 
// if value is truthy -> green tick \u2705 Truthy

const checkTruthy = value => value ? "\u2705 Truthy" : "\uD83E\uDD25 Falsy"
console.log(checkTruthy([]))
console.log(checkTruthy(0))
console.log('false')

