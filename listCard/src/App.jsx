import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    { id: 1, title: "Card 1", description: "Card 1 description" },
    { id: 2, title: "Card 2", description: "Card 2 description" },
    { id: 3, title: "Card 3", description: "Card 3 description" },
  ];
  return (
    <>
    <div className="app">
      {data.map((content) => {
        return (
          <Card
            key={content.id}
            title={content.title}
            description={content.description}
          />
        );
      })}
      </div>
    </>
  );
}

export default App;
