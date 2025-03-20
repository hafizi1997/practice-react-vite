import React from "react";
import BookShow from "./BookShow";

const BookList = ({ bookList, onDelete, onEdit }) => {
  const renderedBookList = bookList.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className="book-list">{renderedBookList}</div>;
};

export default BookList;
