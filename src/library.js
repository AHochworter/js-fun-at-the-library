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

// FUNCTION addBook
function addBook(library, book) {
  var genre = book.genre;
  return library.shelves[genre].push(book);
}
//add a book to the fantasy shelf
//add to the shelves array inside the library object
//library.shelves.fantasy.push() to index [0]
//add genre to the library object
//use .push() method to add the books correct shelf array

//TODO FUNCTION checkoutBook

//TODO FUNCTION takeStock
// function takeStock() {}

module.exports = {
  createLibrary,
  addBook,
  //checkoutBook,
  //takeStock,
};
