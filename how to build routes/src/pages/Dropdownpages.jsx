import React from "react";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

const Dropdownpages = () => {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: 1 },
    { label: "Yellow", value: 2 },
    { label: "Green", value: 3 },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default Dropdownpages;
