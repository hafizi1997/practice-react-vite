import React, { useState } from "react";


const Counter = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div>
      <div className="p-3">{value}</div>

    </div>
  );
};

export default Counter;
