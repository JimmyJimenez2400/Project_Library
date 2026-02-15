//MODEL

// Store book objects in an array
const myLibrary = [];

// Build the Constructor for Book
function Book(title, author, currentPage, totalPages, isRead) {
  // add safeguard
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
  this.totalPages = totalPages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.sayInfo = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
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
      <p>${book.currentPage}</p>
      <p>${book.totalPages}</p>
    </div>
    <div class="rightSide">
      <button class="isReadOrNot">Status</button>
      <button class="deleteButton" data-book-id="${book.id}">Delete</button>
      <button class="expand">Expand</button>
    </div>
  `;

  return card;
}

function renderLibrary() {
  const collectionContainer = document.querySelector('#BookContainer');
  collectionContainer.innerHTML = ``;

  myLibrary.forEach((item) => {
    console.log(item);
    collectionContainer.appendChild(createBookCard(item));
  });
}

function start() {
  renderLibrary();

  const addButton = document.querySelector('.addButton');
  const dialog = document.querySelector('#bookDialog');
  const bookForm = document.querySelector('#bookForm');

  addButton.addEventListener('click', () => {
    dialog.showModal();
  });

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookName = document.querySelector('#book_name').value;
    const bookAuthor = document.querySelector('#book_author').value;
    const currentPage = document.querySelector('#current_page').value;
    const totalPages = document.querySelector('#total_pages').value;
    const isRead = document.querySelector('#currently_reading_state').checked;

    let newBook = new Book(
      bookName,
      bookAuthor,
      currentPage,
      totalPages,
      isRead,
    );

    addBookToLibrary(newBook);
    console.log('ADDED NEW BOOK');
    renderLibrary();

    bookForm.reset();
    dialog.close();
  });
}

start();
