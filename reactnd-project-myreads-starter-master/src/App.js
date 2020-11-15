import React , { Component } from 'react'
 //import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import BooksLibrary from './BooksLibrary'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
       <Router>
         <Route exact path= '/' component = {Shelf}/>
         <Route exact path= '/add' component = {BooksLibrary}/>
       </Router>
      </div>
    )
  }
}

export default BooksApp