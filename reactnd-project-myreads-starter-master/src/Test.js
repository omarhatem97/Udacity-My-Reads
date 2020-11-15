import React, { Component } from "react";
import Shelf from "./Shelf";
import "./App.css";
import Add from "./Add";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksLibrary from "./BooksLibrary";

class Test extends Component {
  state = {
    books: [],
  };

  //books : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) =>
      this.setState({
        books: allBooks,
      })
    );
  }

  handleBookState = (value) => {
    this.setState ({books:value})
  };

  render() {
    console.log(this.state.books);

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1 className=".list-books-title">My Reads</h1>
              <Shelf
                books={this.state.books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                shelfName="Currently Reading"
              />
              <Shelf
                books={this.state.books.filter((book) => book.shelf === "read")}
                shelfName="Read"
              />
              <Shelf
                books={this.state.books.filter(
                  (book) => book.shelf === "wantToRead"
                )}
                shelfName="Want To Read"
              />
              <Add />
            </div>
          )}
        />
        <Route
          exact
          path="/add"
          render={() => (
            <div>
              <BooksLibrary />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Test;
