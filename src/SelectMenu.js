import React, { Component } from "react";

class SelectMenu extends Component {
  state = {
    value: this.props.book.shelf,
  };

  changeBookState = (e) => {
    this.setState({ value: e.target.value });
    this.props.onHandleBookState(e);
  };

  render() {
    return (
      <div>
        <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.changeBookState}>
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
