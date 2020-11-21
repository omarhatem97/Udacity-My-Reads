import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import SearchToolbar from "./SearchToolbar";
import * as BooksAPI from "./BooksAPI";

class BooksLibrary extends Component {
  state = {
    query: "",
    filteredBooks: [],
  };

  UpdateQuery = (updatedQuery) => {
    this.setState(() => ({
      query: updatedQuery,
    }));

    BooksAPI.search(updatedQuery).then((filterd) => {
      //handle if nothing returned from API or object with error key is returned
      if (filterd === undefined) {
        this.setState({ filteredBooks: [] });
      } else if ("error" in filterd) {
        this.setState({ filteredBooks: [] });
      } else {
        this.setState({ filteredBooks: filterd });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <SearchToolbar
            query={this.state.query}
            onUpdateQuery={this.UpdateQuery}
          />

          <BooksGrid
            onUpdatePage={this.props.onUpdatePage}
            query={this.state.query}
            filteredBooks={this.state.filteredBooks}
          />
        </div>
      </div>
    );
  }
}

export default BooksLibrary;
