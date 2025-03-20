import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showForm, setShowForm] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEdit = () => {
    setShowForm(!showForm);
  };
  const handleOnHide = (id, newTitle) => {
    setShowForm(false);
    onEdit(id, newTitle);
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
