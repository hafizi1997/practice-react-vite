import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

const BookShow = ({ book }) => {
  const { deleteBookById } = useBookContext();
  const [showForm, setShowForm] = useState(false);
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEdit = () => {
    setShowForm(!showForm);
  };
  const handleOnHide = () => {
    setShowForm(false);
  };
  let content = <h3> {book.title}</h3>;
  if (showForm) {
    content = <BookEdit book={book} onHide={handleOnHide} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
