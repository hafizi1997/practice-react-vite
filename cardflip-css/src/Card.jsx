import classNames from "classnames";

const Card = ({ children, className, ...rest }) => {
  const finalClassName = classNames(
    "card bg-[#111122]/50 backdrop-blur-sm p-6 rounded-xl border border-[#f8fafc]/10",
    className
  );

  return (
    <div className={finalClassName} {...rest}>
      <div>{children}</div>
    </div>
  );
};

export default Card;
