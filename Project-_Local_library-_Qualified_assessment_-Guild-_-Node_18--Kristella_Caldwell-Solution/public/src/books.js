//Returns the author where author.id === id is true
function findAuthorById(authors, id) {
 let found = authors.find((author) => author.id === id);
 return found;
}

//Used the find() method
//Returns the book object where book.id === id is true
function findBookById(books, id) {
 let foundBooks = books.find((book) => book.id === id);
 return foundBooks;
}

//Used the filter() method
//Return an array with two arrays. The spread doperator is used to combine the arrays
function partitionBooksByBorrowedStatus(books) {
 let booksReturned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );                               
                      
//The .filter method looks thru the books array that makes a new array that meets our conditons.  
 let booksBorrowed = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
  
//The .filter method looks thru the books array and makes a new array that meets our conditions.  
 let finalArray = [[...booksBorrowed], [...booksReturned]];
 return finalArray;
}

//Used the map() method to loop thru the borrows array of the book object.
//Used the find() method with in the map method to loop thru the accounts array.
//Return the spread operator that contains the output values of the map method as borrow and the account variable.
//Used slice method on the output to return only the portion of the array up to the index value 10of the rturned array.
function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
