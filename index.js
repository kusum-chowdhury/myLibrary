const button = document.querySelector('.btn');
const card = document.querySelector('.items');
const nameBook = document.querySelector('#name')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
let read = document.getElementById('read')
let notRead = document.getElementById('notRead')
let readStatus;

//list of book objects
let myLibrary = [{
    name: "Lord of the rings",
    author: 'John Ronald Reuel Tolkien',
    pages: 9250,
    read: 'read'
  },
  ];

// Add the event listener to the button
button.addEventListener("click", addBookToLibrary);

  //logic to toggle read status of the book
function toggleReadStatus(index) {
    myLibrary[index].read = myLibrary[index].read === 'read' ? 'not read' : 'read';
    updateLocalStorage();
    render();
  }

  //to delete the book from myLibrary
function deleteBookByName(name) {
    myLibrary = myLibrary.filter(item => item.name !== name);
    updateLocalStorage();
    render();
  }

  //book object constructor
class Book {
    constructor(name, author, pages, read) {
      this.name = name;
      this.author = author;
      this.pages = pages
      this.read = read;
    }
  }

// create newbook object and push to the myLibrary
function addBookToLibrary() {
    if(nameBook.value.length == 0 || author.value.length ==0){
      alert("please enter the name and author of the book");
      return;
    }
    readStatus = read.checked === true ? "read" : "not read";
    const newBook = new Book(nameBook.value, author.value, pages.value, readStatus);
    myLibrary.push(newBook)
    updateLocalStorage();
    nameBook.value ="";
    author.value = "";
    pages.value = ""; 
    render()  //render and show the added book to the page
}

//to render and show the book objects from myLibrary list
function render(){
    checkLocalStorage();
    card.innerHTML = '';
    myLibrary.forEach((item, index) => {
    const listItem = document.createElement('ul');
    // Create an HTML structure for the book's properties
    listItem.innerHTML = `
    <li class='name'><strong>Name:</strong>${item.name}</li>
    <li class='author'><strong>Author:</strong> ${item.author}</li>
    <li class='pages'><strong>Pages:</strong> ${item.pages}</li>
    <li class='readStatus'><span class="read-status" data-index="${index}">${item.read}</span></li>
    <li><button class="delete-btn" data-name="${item.name}">Delete</button></li>`;
    card.appendChild(listItem);
})
     // Attach event listeners to delete buttons after rendering
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', (event) => {
      const nameToDelete = event.target.getAttribute('data-name');
      deleteBookByName(nameToDelete);
    });
  });
   //event listener to toogle the read status of the book using toogleReadStatus function
    const readStatusSpans = document.querySelectorAll('.read-status');
    readStatusSpans.forEach((readStatusSpan) => {
      readStatusSpan.addEventListener('click', (event) => {
        const indexToToggle = parseInt(event.target.getAttribute('data-index'));
        toggleReadStatus(indexToToggle);
      });
})
}

//set the data to the local storage
function updateLocalStorage(){
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }

//get the data library from the local storage
function checkLocalStorage() {
    if (localStorage.getItem("library")) {
      myLibrary = JSON.parse(localStorage.getItem("library"));
    }
  }
 
render()