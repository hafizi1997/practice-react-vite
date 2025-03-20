import BookShow from "./BookShow";
import useBookContext from "../hooks/use-books-context";



const BookList = () => {
  const { books } = useBookContext();
  const renderedBookList = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBookList}</div>;
};

export default BookList;
