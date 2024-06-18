//Created a variable named foundId that will store the results of the find() method used on the accounts array.
//The function named findAccountById was created to take in 2 parameters of an array of accounts and an ID of an account
function findAccountById(accounts, id) {
 let foundId = accounts.find((account) => account.id === id);
 return foundId;
}

//This function takes in an array of accounts and sorted thru the acocunts using the sort() method alphabetically
//If the number is negative, the first and item accountA will be moved before the second item accountB
//If it were the opposite with the number to be positive then continues thru the array
//Return a sorted array of objects alphabetically by last name.
function sortAccountsByLastName(accounts) {
 accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
}

//This function takes an array of accounts and returns an arrqay of their full names
//Used the .map() method and object destructuring on an array item argument
function getAccountFullNames(accounts) {
  return accounts.map(({name:{first, last}}) => first + ' ' + last);
}
//This function takes and account and arrray of all books
//The function will loop thru the borrow array to check if the borrower id matches the account, if it's true the counter will add 1 to totalBorrows
//When the loop is complete return the value stored in the totalBorrows variable.
function getTotalNumberOfBorrows(account, books) {
 let totalBorrows = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    totalBorrows += 1;
   }
  }
 }
 return totalBorrows;
}
  
//Declared a variable that will store the value of the final result in an empty array.
//Looped thru the books array using forEach method and looped thru the borrowers using the same method
//Destructured the book object
//Then looped thru the borrawed array to check if borrow.id is equl to accountID and borrow.returned == false
//Filtered thru the authors array to return one author object of which ever ID matched
function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
