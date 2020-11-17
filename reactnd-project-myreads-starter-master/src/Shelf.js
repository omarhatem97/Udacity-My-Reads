import React, { Component } from "react";
import BookItem from "./BookItem";

class Shelf extends Component {
  state = {

  };



  render() {
    console.log(this.state.booksOnShelf)
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfName}</h2>

          <ol className="books-grid">
            {this.props.books.map((book) => (
              <BookItem onUpdatePage = {this.props.onUpdatePage}
                book = {book}
                Title={book.title}
                Author={book.authors}
                Imgurl={book.imageLinks.thumbnail}
                shelf = {book.shelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
