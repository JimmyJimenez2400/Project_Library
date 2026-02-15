# Project_Library

A lightweight, interactive web application for tracking your personal book collection. Built as part of the JavaScript course to practice object-oriented principles, DOM manipulation, and event handling.

## 🚀 Features

- **Dynamic Library Management**: Add books with titles, authors, and page progress.
- **Unique Identification**: Every book is assigned a unique `UUID` using the `crypto.randomUUID()` API for stable data tracking.
- **Smart Sorting**:
  - **Currently Reading**: Books currently in progress.
  - **Collection**: Completed books.
- **Interactive Controls**:
  - **Toggle Status**: Instantly move books between "Reading" and "Collection" (uses Prototype methods).
  - **Delete**: Remove books from the library with a single click.
- **Modern UI**: Uses the HTML5 `<dialog>` element for modal-based form entry

## 🛠️ Technical Implementation

### The Model (Data)

Books are created using a constructor function and stored in a central `myLibrary` array.

- **Prototypes**: The `toggleStatus` logic is defined on the `Book.prototype` for memory efficiency.
- **Data Casting**: Form inputs are cast to `Number()` to ensure correct pagination tracking.

### The View (UI)

The application uses a **render function** that clears and rebuilds the DOM sub-containers whenever the library array changes.

- **Data Attributes**: DOM elements are linked to JS objects via `data-book-id` attributes, allowing for precise manipulation.
- **Event Delegation**: A single event listener on the parent `#BookContainer` handles all interactions for dynamically created cards.

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/library-app.git](https://github.com/your-username/library-app.git)

   ```

2. Open index.html in your browser.

## Created by Jimmy Jimenez February 2026
