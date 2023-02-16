const books = document.querySelector("book");

let library;
let DEFAULT_DATA = [
    {
        title: "book1",
        author: "book1",
        read: true,
    },    
    {
        title: "book2",
        author: "book2",
        read: false,
    }
];

class book { // book constructor
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, read.value);
    library.push(newBook);
}