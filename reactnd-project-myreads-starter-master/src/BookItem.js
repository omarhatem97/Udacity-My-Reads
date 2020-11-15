import React, { Component } from "react";
import SelectMenu from "./SelectMenu";
import * as BooksAPI from './BooksAPI'

class BookItem extends Component {
  state = {
    bookState: "",
  };

  handleBookState = (e) => {
    this.setState({ bookState: e.target.value });
    BooksAPI.update(this.props , e.target.value);
  };

  render() {
    return (
      <div>
        <li key={this.props.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${this.props.Imgurl})`,
                }}
              />
              <SelectMenu title={this.props.Title} onHandleBookState = {this.handleBookState}/>
            </div>
            <div className="book-title">{this.props.Title}</div>
            <div className="book-authors">{this.props.Author}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default BookItem;
