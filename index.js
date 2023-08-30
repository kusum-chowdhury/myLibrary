const button = document.querySelector('.btn');
const card = document.querySelector('.items');
const nameBook = document.querySelector('#name')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
let read = document.getElementById('read')
let notRead = document.getElementById('notRead')

let myLibrary = [{
    name: "Lord of the rings",
    author: 'John Ronald Reuel Tolkien',
    pages: 9250,
    read: 'Read'
  },
  ];

class Book {
    constructor(name, author, pages, read) {
      this.name = name;
      this.author = author;
      this.pages = pages
      this.read = read;
    }
  }
  