import React, { Component } from "react";
import BooksApp from "./App";
import BookItem from "./BookItem";
import * as BooksAPI from "./BooksAPI";

class BooksGrid extends Component {
  //books : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  state = {
    filterdBooks: [],
  };

  render() {
    const { query, filterdBooks } = this.props;

    //console.log("books :" + books);

    // console.log('filterd books: ' + filterdBooks);

    const showingBooks =
      query === ""
        ? [] //NOTE! : at final step set it to [] 'empty array'
        : filterdBooks;

    console.log(showingBooks);

    return (
      <div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <BookItem onUpdatePage = {this.props.onUpdatePage}
                book={book}
                Title={book.title}
                Author={book.authors}
                Imgurl={book.imageLinks.thumbnail}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksGrid;
