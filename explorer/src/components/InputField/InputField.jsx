import styles from "./InputField.module.scss";
import PropTypes from "prop-types";
import { Triangle } from "lucide-react";
const InputField = ({
  type,
  label,
  name,
  value,
  placeholder,
  onChange,
  options,
  className,
  ...rest
}) => {
  return (
    <div className={styles.inputFieldContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      {type === "select" ? (
        <div className={styles.selectWrapper}>
          <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className={`${styles.selectField} ${className}`}
            {...rest}
          >
            <option value="">{placeholder || "Select option"}</option>

            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <span className={styles.selectIcon}></span>
        </div>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          id={name}
            className={`${styles.inputField} ${className}`}
          placeholder={placeholder}
          {...rest}
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "password",
    "email",
    "number",
    "date",
    "file",
    "checkbox",
    "radio",
    "select",
  ]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};
InputField.defaultProps = {
  type: "text",
  label: "",
  name: "",
  value: "",
  placeholder: "",
  onChange: () => {},
  options: [],
  className: "",
};

export default InputField;
