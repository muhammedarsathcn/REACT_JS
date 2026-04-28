import React from "react";
import styles from "./Banner.module.scss";
import PropTypes from "prop-types";
//banner component to show toast after submitting contact form
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

//prop types for banner
Banner.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default Banner;
