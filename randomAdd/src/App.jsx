import { useState } from "react";
import "./App.css";
import Animals from "./components/Animals";
import Cow from "./assets/cow.webp";
import Cat from "./assets/cat.webp";
import Chicken from "./assets/chicken.webp";

function App() {
  const [animals, setAnimals] = useState([]);
  const listAnimals = [
    { image: Cow, name: "Cow", size: 100 },
    { image: Cat, name: "Cat", size: 100 },
    { image: Chicken, name: "Chicken", size: 100 },
  ];
  const pickRandom = () => {
    const randomAnimal = listAnimals[Math.floor(Math.random() * listAnimals.length)];
    setAnimals((prevAnimals) => [...prevAnimals, randomAnimal]);
  };
  return (
    <>
      <button
        onClick={() => {
          pickRandom();
        }}
      >
        Add
      </button>
      <div className="animal-list">
        {animals.map((ani, index) => {
          return <Animals key={index} image={ani.image} size={ani.size}/>;
        })}
      </div>
    </>
  );
}

export default App;
