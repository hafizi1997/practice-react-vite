import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      createBook(title);
    }

    setTitle("");
  };
  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          className="input"
          type="text"
          onChange={handleOnChange}
          value={title}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
