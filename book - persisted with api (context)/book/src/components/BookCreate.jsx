import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) {
      onCreate(title);
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
