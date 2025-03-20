import { useState } from "react";
import "./App.css";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
