import React, { Component } from "react";

class SelectMenu extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select onChange={this.props.onHandleBookState}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SelectMenu;
