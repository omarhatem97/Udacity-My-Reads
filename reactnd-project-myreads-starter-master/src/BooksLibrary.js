import React, { Component } from "react";
import BooksGrid from "./BooksGrid";
import SearchToolbar from "./SearchToolbar";
import * as BooksAPI from "./BooksAPI";

class BooksLibrary extends Component {
  state = {
    query: "",
    filterdBooks: [],
  };

  // componentDidMount() {
  //   BooksAPI.getAll().then((allBooks) =>
  //     this.setState({
  //       filterdBooks: allBooks,
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
        this.setState({ filterdBooks: [] });
      } else if ("error" in filterd) {
        console.log("reached error in filtered");
        this.setState({ filterdBooks: [] });
      } else {
        console.log('reached there are books');
        console.log(filterd)
        this.setState({ filterdBooks: filterd });
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
            filterdBooks={this.state.filterdBooks}
          />
        </div>
      </div>
    );
  }
}

export default BooksLibrary;
