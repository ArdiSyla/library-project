# My Library

A simple, elegant web application to manage your personal book collection. Add books, track reading progress, and organize your library—all in one place.

## Features

- ✨ **Add Books** - Create a new book entry with title, author, page count, and read status
- 📚 **Track Reading** - Mark books as read or unread with a single click
- 🗑️ **Remove Books** - Delete books from your library
- 📊 **View Statistics** - See total book count and how many you've read


## Getting Started

1. Open `index.html` in your web browser
2. Click **+ New Book** to add a book to your library
3. Fill in the book details (title, author, pages) and optionally mark it as read
4. Click **Add Book** to save it
5. Use **Mark read/unread** to toggle reading status or **Remove** to delete a book

## Project Structure

```
library-project/
├── index.html    # HTML structure and layout
├── style.css     # Styling and responsive design
├── script.js     # Application logic and functionality
└── README.md     # This file
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling and layout
- **JavaScript (ES6+)** - Application logic with Object Constructor and Prototypes

## How It Works

The application uses:
- A `Book` constructor function to create book objects
- An array (`myLibrary`) to store all books
- Event delegation for dynamic button handling
- The HTML5 `<dialog>` element for the add book modal

Pre-loaded with 3 sample books to get you started.