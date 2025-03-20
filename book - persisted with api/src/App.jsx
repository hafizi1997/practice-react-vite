import { useEffect, useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }  
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
  };
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`,{
      id
    })
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };
  const editBookById = async (id, newTile) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTile
    })
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBook);
  };
  useEffect(() => {
    fetchBooks()
  }, [])
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
