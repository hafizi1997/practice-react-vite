import React, { useState } from "react";

const SearchBar = ({ searchInput }) => {
  const [formData, setFormData] = useState({
    search: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    searchInput(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form">
        <input
          name="search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={formData.search}
        />
        {/* <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
        />
          <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default SearchBar;
