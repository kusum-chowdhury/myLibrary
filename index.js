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
    read: 'Read'
  },
  ];

  //logic to toggle read status of the book
function toggleReadStatus(index) {
    myLibrary[index].read = myLibrary[index].read === 'read' ? 'not read' : 'read';
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

// Add the event listener to the button
button.addEventListener("click", addBookToLibrary);

// create newbook object and push to the myLibrary
function addBookToLibrary() {
    if(nameBook.value.length == 0 || author.value.length ==0){
      alert("please enter the name and author of the book");
      return;
    }
  
    const newBook = new Book(nameBook.value, author.value, pages.value, readStatus);
    myLibrary.push(newBook)
    nameBook.value ="";
    author.value = "";
    pages.value = ""; 
    render()  //render and show the added book to the page
}

//to render and show the book objects from myLibrary list
function render(){
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
    
   //event listener to toogle the read status of the book using toogleReadStatus function
    const readStatusSpans = document.querySelectorAll('.read-status');
    readStatusSpans.forEach((readStatusSpan) => {
      readStatusSpan.addEventListener('click', (event) => {
        const indexToToggle = parseInt(event.target.getAttribute('data-index'));
        toggleReadStatus(indexToToggle);
      });
})
}
render()