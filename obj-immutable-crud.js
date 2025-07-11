const obj = {
    id: 1,
    firstname: "Athanassios"
}
// add properties
// mutable

obj.lastname = "Androutsos"

// immutable way to add a key: value. Without [] field is static property
const addToObj = (obj, field, value) => ({...obj, [field]: value })
addToObj(obj, 'lastname', 'Androutsos')

// update
// mutable
obj.firstname = "Bob"

// immutable - fresh copy - update
const updateObj = (obj, field, value) => (obj, field, value) => ({...obj, [field]: value })
updateObj(obj, 'firstname', 'Bob')

// mutable delete
delete obj.firstname

// immutable delete
const deleteFromObj = (obj, field) => {
    const { [field]: _ , ...objToReturn } = obj;        // destructure, rest operator
    return objToReturn;
}

const newObj = deleteFromObj(obj, 'id')
