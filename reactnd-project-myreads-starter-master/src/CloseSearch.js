import React, { Component } from "react";
import { Link } from "react-router-dom";

class CloseSearch extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="/" className="close-search">
          Close
        </Link>
      </div>
    );
  }
}

export default CloseSearch;
