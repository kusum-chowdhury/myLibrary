# myLibrary
# JavaScript Library Management Application

Manage your virtual book library with this simple JavaScript application. Add new books, mark them as read or not read, delete books, and view your collection right in your browser. This application uses the Document Object Model (DOM) to dynamically update the user interface.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Functions](#functions)
- [Book Class](#book-class)
- [Usage](#usage)
- [Examples](#examples)

## Introduction

This JavaScript application allows users to manage a virtual library collection of books. The primary features include:

- Adding new books to the library.
- Marking books as read or not read.
- Deleting books from the collection.
- Displaying the entire book collection.

## Getting Started

1. Clone or download this repository to your local machine.
2. Open `index.html` in your preferred web browser.

## Functions

### `addBookToLibrary`

Add a new book to the library collection based on user input.

### `deleteBookByName`

Delete a book from the library collection based on its name.

### `toggleReadStatus`

Toggle the read status of a book between "read" and "not read."

### `render`

Update the user interface to display the current library collection.

### `updateLocalStorage`

Update the browser's local storage with the current library collection.

### `checkLocalStorage`

Check the browser's local storage for a saved library collection and load it if present.

## Book Class

The `Book` class represents a book with its details.

- `name` (string): The name of the book.
- `author` (string): The author of the book.
- `pages` (number): The number of pages in the book.
- `read` (string): The read status of the book ("read" or "not read").

## Usage

1. Include the provided JavaScript code in your HTML file.
2. Create elements with appropriate classes and IDs:
   - `.btn` for the add-book button.
   - `.items` for displaying the book collection.
   - `#name`, `#author`, `#pages`, `#read` for input fields.
3. Interact with the application by adding, deleting, and marking books as read/not read.

## Examples

### Adding a Book

1. Enter the book's name and author.
2. Specify the number of pages.
3. Check the "Read" checkbox if the book has been read.
4. Click the "Add Book" button (with class `.btn`).

### Deleting a Book

1. Find the book you want to delete.
2. Click the "Delete" button next to the book.

### Changing Read Status

1. Locate the book you want to update.
2. Click the read status (e.g., "read" or "not read").

---

Feel free to explore and enhance the application according to your needs. If you encounter any issues or have suggestions, please feel free to contribute or reach out.