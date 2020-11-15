import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Test from "./Test";
import BookLibrary from "./BooksLibrary";
import "./index.css";
import SearchToolbar from "./SearchToolbar";
import BooksApp from "./App";
import { BrowserRouter } from "react-router-dom";
import Shelf from "./Shelf";

ReactDOM.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById("root")
);
