const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');


class Book { // book constructor
    constructor(title, author, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.read = form.read.checked;
    }
}

let myLibrary = [];
let newBook;

function addBookToLibrary() {
    //event.preventDefault(); // makes event cancellable
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, read);
    myLibrary.push(newBook); // pushes newBook into myLibrary array 

    setData(); // saves in local computer as data array
    render(); // renders page to update book display 
    form.reset(); // clears previously entered data
}

function render() { // creates book visually in your browser
    const display = document.getElementById('book-container');
    const books = document.querySelectorAll('.aBook');
    books.forEach(aBook => display.removeChild(aBook)); 

    for (let i=0; i < myLibrary.length; i++) { // loops through createBook function for each book card
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    const library = document.querySelector('#book-container');
    const aBookDiv = document.createElement('div');

    // the three div blocks that make up the card
    const blockshadingDiv = document.createElement('div'); // this goes inside 
    const infoblockDiv = document.createElement('div'); // along with this which contains the array information for each book
    const userBookActionsDiv = document.createElement('div'); // this holds the dummy images

    // adding classes to each div
    aBookDiv.classList.add('aBook'); // add class name to new div
    aBookDiv.setAttribute('id', myLibrary.indexOf(item)); // give each book a number to organise array'
    blockshadingDiv.classList.add('blockshading'); // shading on left side added
    infoblockDiv.classList.add('infoblock');
    userBookActionsDiv.classList.add('userBookActions'); // userBookActions class add

    // these happen inside infoblockDiv
    const titleDiv = document.createElement('h5');
    titleDiv.classList.add('booktitle'); // adds class name for h5 header
    titleDiv.textContent = item.title; // calls the name of the book
    infoblockDiv.appendChild(titleDiv); // appends 

    const authDiv = document.createElement('p');
    authDiv.textContent = item.author;
    infoblockDiv.appendChild(authDiv);

    const readDiv = document.createElement('p');
    readDiv.textContent = item.read;
    infoblockDiv.appendChild(readDiv);

    // creating the toggle label
    const readToggleLabel = document.createElement('div');
    readToggleLabel.classList.add('read-toggle-label');
    readToggleLabel.textContent = 'Mark as read:';
    userBookActionsDiv.appendChild(readToggleLabel);

    // toggle itself
    const readBtn = document.createElement('button'); // read btn
    const bookActionsImg = document.createElement('img');
    bookActionsImg.src = '/Library/pics/book-open-page-variant-outline.svg';
    bookActionsImg.classList.add('bookActionsImg');
    readBtn.classList.add('readBtn');
    readBtn.appendChild(bookActionsImg);
    userBookActionsDiv.appendChild(readBtn);

    // delete button
    const removeBtn = document.createElement('button'); // remove btn
    const removeActionsImg = document.createElement('img');
    removeActionsImg.src = '/Library/pics/trash-can-outline.svg';
    removeActionsImg.classList.add('bookActionsImg');
    removeBtn.classList.add('removeBtn');
    removeBtn.appendChild(removeActionsImg);
    userBookActionsDiv.appendChild(removeBtn);

    if(item.read === false) {
        readDiv.textContent = 'Not Read';
    } else {
        readDiv.textContent = 'Read';
    }

    library.appendChild(aBookDiv); // appends aBookDiv to be the child of library
    aBookDiv.appendChild(blockshadingDiv); // appends blockshadingDiv to be the child of aBookDiv
    aBookDiv.appendChild(infoblockDiv);
    aBookDiv.appendChild(userBookActionsDiv);

    infoblockDiv.appendChild(authDiv);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        setData();
        render();
    })

    readBtn.addEventListener('click', () => {
        item.read = !item.read;
        setData();
        render();
    })
}

// stores library in local storage
function setData() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// when page is refreshed, this pulls books from local storage
function restore() {
    if(!localStorage.myLibrary) {
        render();
    } else {
        let objects = localStorage.getItem('myLibrary');
        objects = JSON.parse(objects);
        myLibrary = objects;
        render();
    }
}

restore();