import { configureStore } from "@reduxjs/toolkit";
import {
  carReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";


const store = configureStore({
    reducer:{
        cars: carReducer,
        form: formReducer
    }
})
export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm}