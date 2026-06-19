import React from "react";
import styles from "./SectionHeading.module.scss";
import PropTypes from "prop-types";
const SectionHeading = ({ heading, description }) => {
  return (
    <div>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SectionHeading;

// prop types for section heading
SectionHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
