//FIXME FUNCTION shelfBook

function shelfBook(book, shelf) {
  //add books to a specific shelf
  //book and shelf parameters - shelf gives us the "empty bucket" for sciFi and book gives us the "empty bucket" for the incoming book object
  shelf.unshift(book);

  if (shelf.length > 3) {
    shelf.pop();
  }
  return shelf;
}

// FUNCTION unshelfBook
function unshelfBook(title, shelf) {
  // Loop through each book on the shelf
  for (var i = 0; i < shelf.length; i++) {
    // Check if the book's title matches the given title
    if (shelf[i].title === title) {
      // Remove the book from the shelf using splice
      shelf.splice(i, 1);
      // Exit the loop since we found and removed the book
      break;
    }
  }
}

// FUNCTION listTitles

function listTitles(shelf) {
  //create a list of all titles on a shelf
  var titles = [];
  //create empty array for the titles
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.join(', ');
  //uses a method .join() to concatenate the titles
}

//TODO FUNCTION searchShelf
function searchShelf(shelf, title) {
  // Check if the title is on the shelf
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false; // Return false if the title is not found
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
};
