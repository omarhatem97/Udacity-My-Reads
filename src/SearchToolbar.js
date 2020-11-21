import React from "react";
import CloseSearch from "./CloseSearch";

function SearchToolbar(props) {
  const { query, onUpdateQuery } = props;
  return (
    <div>
      <div className="search-books-bar">
        <CloseSearch />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => onUpdateQuery(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchToolbar;
