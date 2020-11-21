import React, { Component } from "react";
import BookItem from "./BookItem";

function Shelf(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>

        <ol className="books-grid">
          {props.books.map((book) => (
            <BookItem
              onUpdatePage={props.onUpdatePage}
              book={book}
              Title={book.title}
              Author={book.authors}
              Imgurl={book.imageLinks.thumbnail}
              shelf={book.shelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
