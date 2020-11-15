import React, { Component } from "react";
import BookItem from "./BookItem";
import * as BooksAPI from "./BooksAPI";

class BooksGrid extends Component {
  //books : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  render() {
    const { query, books } = this.props;
   
    console.log("books :" + books);

    const showingBooks =
      query === ""
        ? books
        : books.filter((book) =>
            book.title.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <BookItem
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
