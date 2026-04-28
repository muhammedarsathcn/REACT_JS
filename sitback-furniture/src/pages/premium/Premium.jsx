import image from "../../assets/login-bg.jpg";
import styles from "./Premium.module.css";
const Premium = () => {
  return (
    <section className={styles.premiumContainer}>
      <figure className={styles.imgContainer}>
        <img src={image} alt="premium_image" />
      </figure>
    </section>
  );
};

export default Premium;
