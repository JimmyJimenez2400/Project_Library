// Store book objects in an array
const myLibrary = [];

// Build the Constructor for Book
function Book(title, author, pages, isRead) {
  // add safeguard
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.sayInfo = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(bookInstance) {
  // Now with the newBook, we want to push this into the array
  myLibrary.push(bookInstance);
}

const starterData = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 295, read: false },
  { title: '1984', author: 'George Orwell', pages: 328, read: true },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    pages: 180,
    read: false,
  },
];

function populateLibrary() {
  starterData.forEach((data) => {
    let newBook = new Book(data.title, data.author, data.pages, data.read);
    addBookToLibrary(newBook);
  });
}

populateLibrary();
