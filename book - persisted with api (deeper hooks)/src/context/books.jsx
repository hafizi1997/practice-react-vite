import { useState, createContext, useCallback } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
  };
  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`, {
      id,
    });
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBook);
  };
  const editBookById = async (id, newTile) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTile,
    });
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBook);
  };
  const funcToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    editBookById,
  };
  return (
    <BooksContext.Provider value={funcToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { Provider };
export default BooksContext;
