import { useState } from "react";
import Card from "./Card";
import "./App.css";
import { Form } from "../Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">app</div>
      <Card title="Simple card" description="this is simple description" />
      <textarea autoFocus={true}></textarea>
    </>
  );
}

export default App;
