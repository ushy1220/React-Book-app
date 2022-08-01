/* PLIK APP.JS JEST PLIKIEM GŁÓWNEGO KOMPONENTU  */

import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import React, { useState } from "react";
import shortid from 'shortid';

class App extends React.Component {

  /* const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck'},
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'}
  ]);                   
*/
state = {
  books: [
    { id: 1, title: 'of Mice and Men', author: 'John Steinbeck'},
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski'}
  ]
};

  /*const*/ removeBook = bookId => {
    this.setState({ books: this.state.books.filter(book => book.id !== bookId) })
  }

  /*const*/ addBook = newBook => {
    this.setState({ books:[...this.state.books, {id: shortid(), title: newBook.title, author: newBook.author}] })
  }

  render() {
    return (
      <div>
        <h1>Books App</h1> 
        <BooksList books={this.state.books} removeBook={this.removeBook} />
        <BookForm  addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
