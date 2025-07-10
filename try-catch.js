class ProductError extends Error {

    constructor(message) {
        super(message)
        this.code = 'ProductError'
    }
}

class InvalidProductError extends Error {

    constructor(message) {
        super(message)
        this.code = 'InvalidProductError'
    }
}

class DuplicateProductError extends Error {

    constructor(message) {
        super(message)
        this.code = 'DuplicateProductError'
    }
}


function insert(arr, product) {
    try {
        if (!product || typeof product !== 'object') {
            // throw new Error('Invalid Product')
            throw new InvalidProductError('Invalid Product')
        }

        if (arr.some(p => p.id === product.id)) {
           //  throw new Error('Product already exists')
           throw new DuplicateProductError(`Product with id=${product.id} already exists`)
        }

        arr.push(product)
        console.log(`Product inserted: ${JSON.stringify(product)}`)
    } catch (error) {
        console.error(`${new Date().toLocaleString()}. Error inserting product: ${error.message}`)
        throw error;    // Re-throw
    }
}

const products = []

try {
    insert(products, { id: 1, title: 'Laptop', price: 1000 });
    insert(products, { id: 1, title: 'Smartphone', price: 500 });
} catch (error) {
    // console.log(`Error. ${error.message}`)
    if (error instanceof InvalidProductError) {
        console.log(`Error. ${error.message}`)    
    } else if (error instanceof DuplicateProductError) {
        console.log(`Error. ${error.message}`)   
    } else {
        console.log(`Unexpected Error. ${error.message}`)  
    }
}