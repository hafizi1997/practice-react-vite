import SearchBar from "./components/SearchBar";
import "./App.css";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (formData) => {
    const search = formData.search;
    const email = formData.email;
    const result = await searchImages(search);
    setImages(result.data.results)
    console.log(result.data);
  };

  return (
    <>
      <SearchBar searchInput={handleSubmit} />
      <ImageList images ={images}/>
    </>
  );
}

export default App;
