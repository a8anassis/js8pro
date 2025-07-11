// Constructor function
// PascalCase, includes this, not returns

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.year}`;
  };
}

const book1 = new Book('Harry Potter', 'J.K. Rowling', 1997);
console.log(book1.getInfo()); // "Harry Potter by J.K. Rowling, 1997"

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.getInfo = function () {
            return `${this.title} by ${this.author}, ${this.year}`;
        };
    }
}

const book2 = new Book('Harry Potter', 'J.K. Rowling', 1997);
console.log(book1.getInfo()); // "Harry Potter by J.K. Rowling, 1997"
const book = new Book("1984", "George Orwell", 1949);
console.log(book.title);  // "1984" 
console.log(book.author); // "George Orwell" 
book.title = "Animal Farm"; // Can modify directly 



// with private properties ES 2022+
class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
    }

    getInfo() {
        return `${this.#title} by ${this.#author}, ${this.#year}`;
    }
}

const b = new Book("Dune", "Frank Herbert", 1965);
console.log(b.title);    // undefined ❌
console.log(b.#title);   // SyntaxError ❌
console.log(b.getInfo()); // "Dune by Frank Herbert, 1965" ✅


// private via closure
function Book(title, author, year) {
  // Private variables
  let _title = title;
  let _author = author;
  let _year = year;

  // Public method with access to private vars
  this.getInfo = function() {
    return `${_title} by ${_author}, ${_year}`;
  };
}
