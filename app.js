//MODEL

// Store book objects in an array
const myLibrary = [
  { title: 'Horse', author: 'Jimmy', pages: 22, isRead: false, id: 1 },
];

// Build the Constructor for Book
function Book(title, author, pages, isRead) {
  // add safeguard
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.sayInfo = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(bookInstance) {
  // Now with the newBook, we want to push this into the array
  myLibrary.push(bookInstance);
}

// VIEW

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('cardContainer');

  card.innerHTML = `
  
    <div class="leftSide">
      <h1>${book.title}</h1>
      <p>${book.author}</p>
      <p>${book.pages}</p>
    </div>
    <div class="rightSide">
      <button class="isReadOrNot">Status</button>
      <button class="deleteButton">Delete</button>
      <button class="expand">Expand</button>
    </div>
  `;

  return card;
}

// CONTROLLER
function init() {
  const collectContainer = document.querySelector('.container');
  const addButton = document.querySelector('.addButton');

  console.log(addButton);

  addButton.addEventListener('click', () => {
    const newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);

    addBookToLibrary(newBook);
  });
  container.appendChild();
}

function checkLibrary() {
  myLibrary.forEach((item) => {
    const collectionContainer = document.querySelector('#BookContainer');
    collectionContainer.innerHTML = ``;

    collectionContainer.appendChild(createBookCard(item));
  });
}


function start(){
  checkLibrary();
  const addButton = document.querySelector('.addButton');

  addButton.addEventListener('click', ()=>{
    
  })
}

// When it comes to adding to the library and displaying it.
