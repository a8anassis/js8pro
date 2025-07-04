let inputName = 'bob'
let username = inputName || 'default user'

console.log(username)   // default user


let apiURL = undefined
const publicApiURL = apiURL && getFromURL(apiURL)   // 
console.log(publicApiURL)

function getFromURL(url) {
    return 'something from URL'
}


let value = 0
let result = value || 'default value'

console.log(result) //
