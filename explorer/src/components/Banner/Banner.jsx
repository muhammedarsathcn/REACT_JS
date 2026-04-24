import React from "react";
import styles from "./Banner.module.scss";
const Banner = ({ name, source, destination }) => {
  return (
    <div className={styles.bannerWrapper}>
      <p>
        Thank You <strong>{name}</strong> for expressing your interest in
        traveling with.Our sales team will get back with best packages from{" "}
        <strong>{source} </strong>to <strong>{destination}</strong>.
      </p>
    </div>
  );
};

export default Banner;
