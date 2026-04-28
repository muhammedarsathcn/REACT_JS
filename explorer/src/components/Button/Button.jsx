import styles from "./Button.module.scss";
import PropTypes from "prop-types";

//custom button
const Button = ({
  children,
  variant,
  size,
  type,
  className,
  handleClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

//prop types for button
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  handleClick: PropTypes.func,
};
//default prop types
Button.defaultProps = {
  variant: "primary",
  size: "medium",
  type: "button",
  className: "",
  handleClick: undefined,
};

export default Button;
