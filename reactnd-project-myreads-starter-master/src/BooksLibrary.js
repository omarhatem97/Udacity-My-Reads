import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import SearchToolbar from "./SearchToolbar";
import * as BooksAPI from "./BooksAPI";

class BooksLibrary extends Component {
  state = {
    query: "",
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((allBooks) =>
      this.setState({
        books: allBooks,
      })
    );
  }

  UpdateQuery = (updatedQuery) => {
    this.setState(() => ({
      query: updatedQuery,
    }));
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <SearchToolbar
            query={this.state.query}
            onUpdateQuery={this.UpdateQuery}
          />

          <BooksGrid query={this.state.query} books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default BooksLibrary;
