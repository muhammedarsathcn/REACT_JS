import { useState } from "react";
import Button from "../button/Button";
import InputField from "../inputField/InputField";
import styles from "./Loginform.module.css";
const Loginform = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  const handleLoginForm = (e) => {
    e.preventDefault();
   console.log(loginForm)
  };
  return (
    <form className={styles.loginFormContainer} onSubmit={handleLoginForm}>
      <p className={styles.heading}>SITBACK</p>
      <p className={styles.secondHeading}>FURNITURE</p>
      <InputField
        label={"Username"}
        required={true}
        value={loginForm.username}
        handleOnChange={handleChange}
        name={"username"}
      />
      <InputField
        label={"Password"}
        required={true}
        value={loginForm.password}
        handleOnChange={handleChange}
        name={"password"}
      />
      <span className={styles.loginBtn}>
        <Button type={"submit"} variant="secondary">{"LOGIN"}</Button>
      </span>
    </form>
  );
};

export default Loginform;
