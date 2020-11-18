import React, { Component } from "react";
import BooksApp from "./App";
import BookItem from "./BookItem";
import * as BooksAPI from "./BooksAPI";

class BooksGrid extends Component {
  //books : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  state = {
    filterdBooks: [],
    myBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      // get all my Books from my shelves
      this.setState({
        myBooks: allBooks,
      });
    });
  }

  markMyBooks = (showingBooks) => {};

  render() {
    console.log("rerender!");
    const { query, filterdBooks } = this.props;

    //console.log("books :" + books);

    // console.log('filterd books: ' + filterdBooks);

    let showingBooks =
      query === ""
        ? [] //NOTE! : at final step set it to [] 'empty array'
        : filterdBooks;

    //console.log(showingBooks);

    //update the shelf of the searched books from the API //
    // let myBooks = this.getMyBooks();

    //TODO
    //Enta 3yz t filter mn el showing books , el books elle 3ndak mosbakan w t update le shelf bt3ha
    let matchedBook = [];
    showingBooks.map((showing) => {
      // console.log(this.state.myBooks);
      // console.log('showing title : ' + showing.title);
      matchedBook = this.state.myBooks.filter((mine) => mine.id === showing.id);
      console.log(matchedBook);
      if (matchedBook.length) {
        console.log("the shelf :" + matchedBook[0].shelf);
        showing.shelf = matchedBook[0].shelf;
        console.log("title:" + showing.title + " the shelf :" + showing.shelf);
      } else showing.shelf = "none";
    });

    console.log(showingBooks);
    return (
      <div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <BookItem
                onUpdatePage={this.props.onUpdatePage}
                book={book}
                Title={book.title}
                Author={book.authors}
               // Imgurl={book.imageLinks.thumbnail}
                book = {book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksGrid;
