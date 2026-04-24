import styles from "./Button.module.scss";
import PropTypes from "prop-types";

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
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};
Button.defaultProps = {
  variant: "primary",
  size: "medium",
  type: "button",
  className: "",
};
export default Button;
