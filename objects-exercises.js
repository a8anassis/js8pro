// Person object
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

console.log(person.name); // "John"

// Add function to an object
person.greet = function() {
  return `Hello, my name is ${this.name}`;
};

console.log(person.greet()); // "Hello, my name is John"


// Object Key-Value Pairs
function listProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

function listProperties2(obj) {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
}

listProperties(person);
// Output:
// name: John
// age: 30
// city: New York


// Shopping cart object
const cart = {
  items: [],
  addItem(item, price) {
    this.items.push({ item, price });
  },
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
};

cart.addItem('Shirt', 25);
cart.addItem('Pants', 40);
console.log(cart.calculateTotal()); // 65


// Object destructure
const user = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

// Destructuring assignment
const { name, age, email } = user;

console.log(name);  // 'Alice'
console.log(age);   // 25
console.log(email); // 'alice@example.com'


// Destructure with:
// - Renaming (`title` → `productName`)
// - Default value (`stock` defaults to 0 if missing) 
const product = {
  id: 101,
  title: 'Wireless Mouse',
  price: 29.99
};


const { 
  title: productName, 
  price, 
  stock = 0 
} = product;

console.log(productName); // 'Wireless Mouse'
console.log(stock);      // 0 (default value)


// Without destructuring (verbose)
function displayUserVerbose(user) {
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  console.log(`Age: ${user.age || 'Not provided'}`);
}

// With destructuring (clean)
function displayUser({ name, email, age = 'Not provided' }) {
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
}

// Usage
const aUser = {
  name: 'Alex',
  email: 'alex@example.com'
  // age is missing
};

displayUser(aUser);
/* Output:
Name: Alex
Email: alex@example.com
Age: Not provided
*/


// React props
const Button = ({ text, onClick, color = 'primary' }) => (
  <button className={`btn-${color}`} onClick={onClick}>
    {text}
  </button>
);

<Button 
  text="Click Me" 
  onClick={() => console.log('Clicked!')} 
  color="secondary"
/>