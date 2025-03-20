import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.floor(Math.random() * 100), title },
    ];
    setBooks(updatedBook);
  };
  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };
  const editBookById = (id, newTile) => {
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTile };
      }
      return book;
    });
    setBooks(updatedBook);
  };
  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          bookList={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

export default App;
