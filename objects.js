const point3D = new Object()
point3D.x = 5;
point3D.y = 10;
point3D.z = 20;

const point2D = {
    x: 10,
    y: 20,
    showY: function() {
        return `${this.y}`
    }
}

console.log(point2D.x)
console.log(point2D['x'])

point2D.showX = function() {
    return `${this.x}`
}

for (let key in point3D) {
    console.log(`${key}: ${point3D[key]}`)
}

for (const [key, value] of Object.entries(point3D)) {
    console.log(`${key}: ${value}`)
}


const cart = {
    items: [],
    addItem(item, price) {
        this.items.push({ item, price })
    },
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0)
    }
}

cart.addItem('Milk', 2)
cart.addItem('Eggs', 5)
console.log(cart.calculateTotal())  // 7