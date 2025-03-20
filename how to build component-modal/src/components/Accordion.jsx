import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1);
  const handleClick = (index) => {
    setExpendedIndex((currentExpendedIndex) => {
      if (currentExpendedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const renderedItems = items.map((item, index) => {
    const isExpended = index === expendedIndex;
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          <span className="text-xl">
            {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        <div className="">
          {isExpended && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
