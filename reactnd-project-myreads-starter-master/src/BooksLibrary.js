import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import SearchToolbar from "./SearchToolbar";
import * as BooksAPI from "./BooksAPI";

class BooksLibrary extends Component {
  state = {
    query: "",
    filteredBooks: [],
  };

  // componentDidMount() {
  //   BooksAPI.getAll().then((allBooks) =>
  //     this.setState({
  //       filteredBooks: allBooks,
  //     })
  //   );
  // }

  UpdateQuery = (updatedQuery) => {
    this.setState(() => ({
      query: updatedQuery,
    }));

    BooksAPI.search(updatedQuery).then((filterd) => {
      if (filterd == undefined) {
        console.log("reached undefined");
        this.setState({ filteredBooks: [] });
      } else if ("error" in filterd) {
        console.log("reached error in filtered");
        this.setState({ filteredBooks: [] });
      } else {
        console.log("reached there are books");
        console.log(filterd);
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
