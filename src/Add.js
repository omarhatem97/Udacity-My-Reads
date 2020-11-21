import React from "react";
import { Link } from "react-router-dom";

function Add(props) {
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

export default Add;
