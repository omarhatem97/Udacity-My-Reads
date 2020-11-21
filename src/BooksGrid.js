import React, { Component } from "react";
import BookItem from "./BookItem";
import * as BooksAPI from "./BooksAPI";

class BooksGrid extends Component {
  //book object returned from api contain imp keys : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  state = {
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

  render() {
    const { query, filteredBooks } = this.props;

    let showingBooks = query === "" ? [] : filteredBooks;

    let matchedBook = [];
    showingBooks.forEach((showing) => {
      matchedBook = this.state.myBooks.filter((mine) => mine.id === showing.id);

      if (matchedBook.length) {
        showing.shelf = matchedBook[0].shelf;
      } else showing.shelf = "none";
    });

    return (
      <div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <BookItem
                key={book.id}
                onUpdatePage={this.props.onUpdatePage}
                Title={book.title}
                Author={book.authors}
                book={book}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksGrid;
