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
  this.currentPage = Number(currentPage);
  this.totalPages = Number(totalPages);
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleStatus = function () {
  this.isRead = !this.isRead;
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
      <button class="isReadOrNot" data-book-id="${book.id}">Status:${book.isRead ? 'Currently Reading...' : 'FINISHED'}</button>
      <button class="deleteButton" data-book-id="${book.id}">Delete</button>
    </div>
  `;
  return card;
}

function renderLibrary() {
  const readingList = document.querySelector('#readingList');
  const collectionList = document.querySelector('#collectionList');

  readingList.innerHTML = '';
  collectionList.innerHTML = '';

  myLibrary.forEach((item) => {
    const card = createBookCard(item);
    if (item.isRead) {
      readingList.appendChild(card);
    } else {
      collectionList.appendChild(card);
    }
  });
}

function start() {
  renderLibrary();

  const addButton = document.querySelector('.addButton');
  const dialog = document.querySelector('#bookDialog');
  const bookForm = document.querySelector('#bookForm');
  const cancelButton = document.querySelector('#cancel');
  const collectionContainer = document.querySelector('#BookContainer');

  addButton.addEventListener('click', () => {
    dialog.showModal();
  });

  cancelButton.addEventListener('click', () => {
    dialog.close();
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
    renderLibrary();

    bookForm.reset();
    dialog.close();
  });

  collectionContainer.addEventListener('click', (e) => {
    let id = e.target.getAttribute('data-book-id');

    if (!id) return;

    if (e.target.classList.contains('deleteButton')) {
      handleDelete(id);
    }

    if (e.target.classList.contains('isReadOrNot')) {
      handleToggle(id);
    }
  });
}

function handleDelete(id) {
  const bookID = id;

  // we want to find the bookID, in our library. Once done, we return the value, then splice it.
  let bookIndex = myLibrary.findIndex((book) => book.id === bookID);
  console.log(`Book index: ${bookIndex}`);

  //splice it
  if (bookIndex > -1) {
    myLibrary.splice(bookIndex, 1);
  }

  // renderLibrary
  renderLibrary();
}

function handleToggle(id) {
  const book = myLibrary.find((book) => book.id === id);
  book.toggleStatus();
  renderLibrary();
}

start();
