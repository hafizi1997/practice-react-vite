import { useState, useContext } from "react";
import BooksContext from "../context/books";
import useBookContext from "../hooks/use-books-context";


const BookEdit = ({ book, onHide }) => {
  const { editBookById } = useBookContext()
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();
    onHide(book.id, title);
    editBookById(book.id, title);
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="title"> Title</label>
        <input type="text" onChange={handleChange} value={title} />
        <button className="buttopn is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
