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
     
// Seed books
addBookToLibrary("Atomic Habits", "James Clear", 256, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Hyper Focus", "Chris Bailey", 246, false);

displayLibrary();
    