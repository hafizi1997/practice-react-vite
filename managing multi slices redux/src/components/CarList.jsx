import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(memoizedCars);
  const searchTerm = useSelector((state) => state.cars.searchTerm).toLowerCase();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const startIndex = car.name.toLowerCase().indexOf(searchTerm);

    let highlightedName;

    if (startIndex !== -1) {
      const beforeMatch = car.name.slice(0, startIndex);
      const match = car.name.slice(startIndex, startIndex + searchTerm.length);
      const afterMatch = car.name.slice(startIndex + searchTerm.length);

      highlightedName = (
        <>
          {beforeMatch}
          <span style={{ fontWeight: "bold" }}>{match}</span>
          {afterMatch}
        </>
      );
    } else {
      highlightedName = car.name;
    }

    return (
      <div key={car.id} className="panel">
        <p>
          {highlightedName} - ${car.cost}
        </p>
        <button onClick={() => handleCarDelete(car)} className="button is-danger">
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};

export default CarList;
