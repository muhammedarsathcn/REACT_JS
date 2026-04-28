import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { NAVLINKS } from "../../constants/NavbarConstant";
const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to={"/"}>
        <figure className={styles.logoContainer}>
          <img src={Logo} alt="Explorer" />
        </figure>
      </Link>
      <ul className={styles.navLists}>
        {NAVLINKS.map((link, _idx) => {
          return (
            <NavLink to={link.path} key={_idx} className={styles.navList}>
              {link.label}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
