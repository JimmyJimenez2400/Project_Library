# 📚 Personal Library Manager

I built this project to get hands-on with JavaScript’s Object-Oriented side. It’s a clean, simple way to track what I’m reading and what I’ve already finished, all managed through a dynamic UI.

## 🚀 What it does

- **Manage your books**: Add new titles, authors, and track your current page progress.
- **Smart Organization**: Books automatically sort themselves into "Currently Reading" or "Collection" (Finished) based on their status.
- **Unique IDs**: Every book gets a unique `UUID` (via `crypto.randomUUID()`), so there’s no confusion when deleting or updating specific cards.
- **Toggle & Delete**: Move a book between lists or remove it entirely with a single click.
- **Clean Forms**: Used the native HTML5 `<dialog>` element for a smooth, modal-style entry form.

## 🛠️ How I built it

### The Logic (The "Model")
Everything starts with a **Book constructor**. Instead of attaching functions to every single book instance, I used **Prototypes** for the `toggleStatus` logic—it's more memory-efficient and keeps the code cleaner.

### The UI (The "View")
The interface stays in sync with the data using a **render function**.
- **Event Delegation**: Instead of adding a listener to every button, I put one listener on the main container. It catches clicks from "bubbling" events, which is much better for performance.
- **Data Attributes**: I used `data-book-id` tags to bridge the gap between my HTML elements and my JavaScript objects.


### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/[yourname]/Project_Library.git

   ```

2. Open index.html in your browser.

## Created by Jimmy Jimenez February 2026
