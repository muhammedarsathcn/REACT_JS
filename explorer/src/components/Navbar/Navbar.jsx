import React from "react";
import Logo from "../../assets/logo.png";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to={"/"}>
        <figure className={styles.logoContainer}>
          <img src={Logo} alt="Explorer" />
        </figure>
      </Link>
      <ul className={styles.navLists}>
        <li className={styles.navList}>Hotels</li>
        <li className={styles.navList}>Bike Rentals</li>
        <li className={styles.navList}>Restaurants</li>
      </ul>
    </nav>
  );
};

export default Navbar;
