const MyLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    MyLibrary.push(newBook);
}


function displayLibrary() {
    const grid = document.getElementById("book-grid");
    grid.innerHTML = "";

    MyLibrary.forEach((book) => {
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
      `;

        grid.appendChild(card);
    });
}

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
    