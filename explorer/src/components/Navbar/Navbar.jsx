import React from "react";
import Logo from "../../assets/logo.png";
import {useNavigate} from 'react-router-dom'
import styles from "./Navbar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { NAVLINKS } from "../../constants/NavbarConstant";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/")
  }
  return (
    <nav className={styles.navBar}>
     
        <figure className={styles.logoContainer} onClick={handleLogoClick}>
          <img src={Logo} alt="Explorer" />
        </figure>
      
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
