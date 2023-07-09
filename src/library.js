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

//  FUNCTION checkoutBook
//parameters - library.shelves, title, genre
//need a variable declared for library.shelves
//need a variable declared for genre shelves[genre]
//need the title - so book object
//loop through to match title
//use splice() - to remove matching title from array

function checkoutBook(library, title, genre) {
  var shelves = library.shelves;
  var books = shelves[genre];

  for (var i = 0; i < books.length; i++) {
    // Check if the book's title matches the given title
    //if books at index[]
    if (books[i].title === title) {
      // Remove the book from the shelves using splice
      books.splice(i, 1);
      // Return the success message
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

//TODO FUNCTION takeStock
//need to count the number of elements in each genre array .length
//parameter library; library.name
//parameter genre; library.shelves[genre]
//save the array count for each genre and add them together? - for loop, save the answer?
function takeStock(library, genre) {
  var shelves = library.shelves;
  var books = shelves[genre];

  if (genre === undefined) {
    var totalBooks = [];
    for (var i = 0; i < shelves.length; i++) {
      totalBooks.push.apply(totalBooks, shelves[i]);
    }
    return `There are a total of ${totalBooks.length} books at the ${library.name}.`;
  }
  return `There are a total of ${books.length} ${genre} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
