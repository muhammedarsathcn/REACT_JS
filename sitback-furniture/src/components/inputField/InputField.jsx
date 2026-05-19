import styles from "./InputField.module.css";
const InputField = ({ label, required,value, handleOnChange, name }) => {
  return (
    <div  className={styles.inputFieldContainer}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <input className={styles.inputField} required={required} value={value} onChange={handleOnChange} name={name} />
    </div>
  );
};

export default InputField;
