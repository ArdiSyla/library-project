const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
      this.read = !this.read;
    };

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


    function removeBook(id) {
      const i = myLibrary.findIndex(b => b.id === id);
      if (i !== -1) myLibrary.splice(i, 1);
    }


function displayLibrary() {
    const grid = document.getElementById("book-grid");
    grid.innerHTML = "";

    if (myLibrary.length === 0) {
        grid.innerHTML = `<div class="empty-state">No books yet — add one to get started.</div>`;
        document.getElementById("book-count").textContent = '';
        return;
      }

      const readCount = myLibrary.filter(b => b.read).length;
      document.getElementById("book-count").textContent =
        `${myLibrary.length} book${myLibrary.length !== 1 ? 's' : ''} · ${readCount} read`;

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        card.innerHTML = `
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">by ${book.author}</p>
        <p class="book-pages">${book.pages} pages</p>
        <span class="read-badge ${book.read ? "read" : "unread"}">
        ${book.read ? "Read" : "Not Read"}
      </span>
      <div class="card-actions">
            <button class="toggle-read-btn" data-id="${book.id}">
              ${book.read ? "Mark unread" : "Mark read"}
      </button>
            <button class="remove-btn" data-id="${book.id}">Remove</button>
          </div>
      `;

        grid.appendChild(card);
    });
}

const grid = document.getElementById("book-grid");

grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-read-btn")) {
    const book = myLibrary.find(b => b.id === e.target.dataset.id);
    if (book) { book.toggleRead(); displayLibrary(); }
  }
  if (e.target.classList.contains("remove-btn")) {
    removeBook(e.target.dataset.id);
    displayLibrary();
  }
});

//Dialog
const dialog = document.getElementById("book-dialog");
const newBookBtn = document.getElementById("new-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click",  () => dialog.close());

bookForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addBookToLibrary(
        document.getElementById("title").value,
        document.getElementById("author").value,
        parseInt(document.getElementById("pages").value),
        document.getElementById("read").checked
      );
      displayLibrary();
      bookForm.reset();
      dialog.close();
    });


     
// Seed books
addBookToLibrary("Atomic Habits", "James Clear", 256, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Hyper Focus", "Chris Bailey", 246, false);

displayLibrary();
    