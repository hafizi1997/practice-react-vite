import PropTyypes from "prop-types";
import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-600 bg-blue-500 text-blue-500": primary,
      "border-gray-600 bg-gray-500 text-white": secondary,
      "border-green-600 bg-green-500 text-white": success,
      "border-yellow-600 bg-yellow-500 text-white": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "rounded-full bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-600": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-600": outline && warning,
      "text-red-600": outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTyypes.bool,
  secondary: PropTyypes.bool,
  success: PropTyypes.bool,
  warning: PropTyypes.bool,
  danger: PropTyypes.bool,
  outline: PropTyypes.bool,
  rounded: PropTyypes.bool,
};
export default Button;
