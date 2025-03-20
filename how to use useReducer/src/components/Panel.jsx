import React from "react";
import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const finalClassName = classNames(
    "border rounded p-3 shadow b-white w-full",
    className
  );

  return <div {...rest} className={finalClassName}>{children}</div>;
};

export default Panel;
