import styles from "./Header.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, NavLink } from "react-router-dom";
import Logout from "../Logout/Logout";
const navLinks = [
  {
    label: "COUCHES",
    path: "/products/couches",
  },
  {
    label: "CHAIRS",
    path: "/products/chairs",
  },
  {
    label: "PREMIUM *",
    path: "/products/premium",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const handleClickList = (path) => {
    navigate(path);
  };

  const {  setAuth } = useAuth();
  const handleSelectChange = (e) => {
    if (e.target.value === "logout") {
      setAuth({
        username: "",
        name: "",
      });
      navigate("/");
    }
  };
  return (
    <nav className={styles.headerContainer}>
      <p onClick={() => handleClickList("/products/couches")}>SITBACK</p>
      <ul>
        {navLinks.map((link, _idx) => {
          return (
            <NavLink
              key={_idx}
              to={link.path}
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {link.label}
            </NavLink>
          );
        })}
      </ul>

      <Logout handleSelectChange={handleSelectChange} />
    </nav>
  );
};

export default Header;
