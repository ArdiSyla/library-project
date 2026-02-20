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



// Seed books
addBookToLibrary("Atomic Habits", "James Clear", 256, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Hyper Focus", "Chris Bailey", 246, false);