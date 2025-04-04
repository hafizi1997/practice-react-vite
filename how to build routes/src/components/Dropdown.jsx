import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  const handleCLick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionCLick = (option) => {
    setIsOpen(!isOpen);
    onChange(option);
    console.log(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionCLick(option)}
      >
        {option.label}
      </div>
    );
  });
  useEffect(() => {
    const handler = (event) => {
        if (!divEl.current) {
          return;
        }
        if (!divEl.current.contains(event.target)) {
          setIsOpen(false);
        }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleCLick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
