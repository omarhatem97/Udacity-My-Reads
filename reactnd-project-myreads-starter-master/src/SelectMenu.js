import React, { Component } from "react";

class SelectMenu extends Component {
  state = {
    value: this.props.book.shelf,
  };

  render() {
    if (this.props.book.title === "The Literature of Satire") {
      console.log(this.props.book.title);
      console.log(this.state.value);
    }

    return (
      <div>
        <div className="book-shelf-changer">
          {/* {console.log('book state :' + this.props.book.shelf)} */}
          <select
            value={this.state.value}
            onChange={this.props.onHandleBookState}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="none">None</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectMenu;
