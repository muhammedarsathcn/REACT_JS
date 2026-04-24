import React from "react";
import style from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={style.notFoundWrapper}>
      <p className={style.notFoundText}>404 Page Not Found!</p>
    </div>
  );
};

export default NotFound;
