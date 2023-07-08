//  FUNCTION createLibrary

function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

//TODO FUNCTION addBook
function addBook(library, book) {
  //add a book to the fantasy shelf
  //add to the shelves array inside the library object
  //library.shelves.fantasy.push() to index [0]
  //add to correct shelf automatically - conditional statement?
  return library.shelves.fantasy.push(book);
}

//TODO FUNCTION checkoutBook
function checkoutBook() {}

//TODO FUNCTION takeStock
function takeStock() {}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
