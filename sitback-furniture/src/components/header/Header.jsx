import styles from "./Header.module.css";
import { useNavigate, NavLink } from "react-router-dom";
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
      <span className={styles.loginNowBtn} onClick={() => handleClickList("/")}>
        Login Now
      </span>
    </nav>
  );
};

export default Header;
