import React, { Component } from "react";
import Shelf from "./Shelf";
import "./App.css";
import Add from "./Add";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksLibrary from "./BooksLibrary";

class BooksApp extends Component {
  state = {
    books: [],
  };

  //book object returned from api has keys : title, authors, imageLinks.thumbnail, shelf (holding the state of the book)

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) =>
      this.setState({
        books: allBooks,
      })
    );
    console.log("allbooks : " + this.state.books);
  }

  updatePage = () => {
    console.log("reached !");
    BooksAPI.getAll().then((allBooks) =>
      this.setState({
        books: allBooks,
      })
    );
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
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Shelf
                onUpdatePage={this.updatePage}
                books={this.state.books.filter(
                  (book) => book.shelf === "currentlyReading"
                )}
                shelfName="Currently Reading"
              />
              <Shelf
                onUpdatePage={this.updatePage}
                books={this.state.books.filter((book) => book.shelf === "read")}
                shelfName="Read"
              />
              <Shelf
                onUpdatePage={this.updatePage}
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
              <BooksLibrary onUpdatePage={this.updatePage} />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
