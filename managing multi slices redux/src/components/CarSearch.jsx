import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";
const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleSearchTermChange = (even) => {
    dispatch(changeSearchTerm(even.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
