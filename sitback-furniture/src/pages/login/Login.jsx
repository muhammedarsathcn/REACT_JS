import Loginform from "../../components/Loginform/Loginform";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <Loginform/>
    </div>
  );
};

export default Login;
