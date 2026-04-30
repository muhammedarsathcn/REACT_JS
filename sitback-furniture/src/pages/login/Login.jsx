import { useEffect, useState } from "react";
import Loginform from "../../components/Loginform/Loginform";
import styles from "./Login.module.css";
import { loginUser } from "../../services/UserService";
import { useAuth } from "../../hooks/useAuth";
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth, username } = useAuth();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const user = await loginUser({ ...loginForm });
    console.log(user);
    if (user) {
      setAuth({
        name: user.name,
        username: user.username,
        isLoading: false,
      });
      navigate("/products/couches");
    }
    else {
      toast.error("Invalid credentials")
    }
  };
  useEffect(() => {
    console.log("Auth Username", username);
  }, [username]);
  return (
    <div className={styles.loginContainer}>
      <Loginform
        loginForm={loginForm}
        handleFormChange={handleChange}
        handleLoginForm={handleLoginForm}
      />
    </div>
  );
};

export default Login;
