import styles from "./Logout.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const Logout = ({ handleSelectChange }) => {
  const { username } = useAuth();
  const navigate = useNavigate();
  return (
    <div className={styles.logoutContainer}>
      {username ? (
        <select defaultValue="username" onChange={handleSelectChange} className={styles.userSelect}>
          <option value="username">{username}</option>
          <option value="logout">Logout</option>
        </select>
      ) : (
        <span className={styles.loginNowBtn} onClick={() => navigate("/")}>
          Login Now
        </span>
      )}
    </div>
  );
};

export default Logout;
