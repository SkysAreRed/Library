const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


class Book { // book constructor
    constructor(title, author, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.read = form.read.checked;
    }
}

let myLibrary = [
    {title: "potato", author: "potato2", read: false}];
let newBook;

function addBookToLibrary() {
    //event.preventDefault(); // makes event cancellable
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, read);
    myLibrary.push(newBook); // pushes newBook into myLibrary array 

    render(); // renders page to update book display 
    form.reset(); // clears previously entered data
}

function render() { // creates book visually in your browser
    const display = document.getElementById('book-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book)); 

    for (let i=0; i < myLibrary.length; i++) { // loops through createBook function for each book card
        createBook(myLibrary[i])
    }
}

function createBook(item) {
    const library = document.querySelector('#book-container');
    const aBookDiv = document.createElement('div');

    const blockshadingDiv = document.createElement('div'); // this goes inside 
    
    const infoblockDiv = document.createElement('div'); // along with this which contains the array information for each book

    // these happen inside infoblockDiv
    const titleDiv = document.createElement('div')
    const authDiv = document.createElement('div')
    //const removeBtn = document.createElement('button')
    //const readBtn = document.createElement('button')

    const userBookActionsDiv = document.createElement('div'); // this holds the dummy images

    aBookDiv.classList.add('aBook'); // add class name to new div
    aBookDiv.setAttribute('id', myLibrary.indexOf(item)); // give each book a number to organise array'


    library.appendChild(aBookDiv); // appends aBookDiv to be the child of library
    aBookDiv.appendChild(blockshadingDiv); // appends blockshadingDiv to be the child of aBookDiv
    aBookDiv.appendChild(infoblockDiv);
    aBookDiv.appendChild(userBookActionsDiv);

    infoblockDiv.appendChild(titleDiv);
    infoblockDiv.appendChild(authDiv);
}

render()