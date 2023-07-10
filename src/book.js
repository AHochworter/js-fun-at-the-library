//  FUNCTION createTitle
function createTitle(title, modTitle) {
  return `The ${title}`;
  // return "The Storm's Awakening";
}
//  FUNCTION buildMainCharacter
//parameters = name, age, pronouns (found in each book variable)
//return character
function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
  return character;
}
//  FUNCTION saveReview

function saveReview(newReview, reviews) {
  //add reviews to an array(empty to start);
  //refactor code to check for unique reviews
  //watch the order of the parameters in theu unit test! Match it!
  if (reviews.includes(newReview) === false) reviews.push(newReview);
}
var reviews = [];
var newReview = 'An astounding success';
saveReview(newReview, reviews);

//  FUNCTION calculatePageCount
function calculatePageCount(title) {
  //add 20 pages per letter in the title
  var titleCount = title.length * 20;
  // console.log(title.length, titleCount);
  return titleCount;
  //parameter of  title
  //count the letters in the title - string length
  //multiply that count by 20
}
//  FUNCTION writeBook
function writeBook(bookTitle, bookCharacter, genre) {
  //return a book object
  //the object key-value pairs link to previous functions
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
  return book;
}
//  FUNCTION editBOOK
function editBook(book) {
  //decrease the books page count to be 3/4 of what it was
  book.pageCount = Math.round(book.pageCount * 0.75);
}
//I have a question here about solidifying where book.pageCount is coming from?  book object?  I was making this far more comples than it needed to be.

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
};
