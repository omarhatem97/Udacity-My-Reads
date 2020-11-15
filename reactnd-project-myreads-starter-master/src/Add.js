import React, { Component } from "react";
import { Link } from "react-router-dom";

class Add extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="open-search">
          <Link to="/add" className="open-search">
            Add Book
          </Link>
        </div>
      </div>
    );
  }
}

export default Add;
