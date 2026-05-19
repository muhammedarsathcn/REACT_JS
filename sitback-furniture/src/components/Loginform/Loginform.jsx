
import { LOGIN_FORM_FIELDS } from "../../constants/LoginConstant";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import styles from "./Loginform.module.css";


const Loginform = ({loginForm, handleFormChange, handleLoginForm}) => {

  return (
    <form className={styles.loginFormContainer} onSubmit={handleLoginForm}>
      <p className={styles.heading}>SITBACK</p>
      <p className={styles.secondHeading}>FURNITURE</p>
      {LOGIN_FORM_FIELDS.map((field, _idx) => {
        return (
         <InputField value={loginForm[field.name]} required={field.required} handleOnChange={handleFormChange} label={field.label} name={field.name} key={_idx} />
       )
     })}
      <span className={styles.loginBtn}>
        <Button type={"submit"} variant="secondary">{"LOGIN"}</Button>
      </span>
    </form>
  );
};

export default Loginform;
