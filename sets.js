let bag = new Set()
bag.add('Java')
bag.add('Python')
bag.delete('Java')

if (bag.has('Python')) console.log('has Python')

function addToSet(set, ...values) {
    values.forEach(value => set.add(value))
}

const set = new Set()
addToSet(set, 1, 2, 3, 4, 5, 6)

function createSet(...elements) {
    return new Set(elements)            // typecast array to Set
}

createSet(1, 2, 3, 4, 5)

const cities = [{id: 1, city: 'Athens'}, {id: 2, city: 'Lamia'}, {id: 3, city: 'Athens'}]
// get unique cities
function getUniqueCities(arr) {
    return [...new Set(arr.map(cityObj => cityObj.city))]
}