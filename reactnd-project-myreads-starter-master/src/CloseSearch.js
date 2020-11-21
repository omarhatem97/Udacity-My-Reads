import React from "react";
import { Link } from "react-router-dom";

function CloseSearch() {
  return (
    <div>
      <Link to="/" className="close-search">
        Close
      </Link>
    </div>
  );
}

export default CloseSearch;
