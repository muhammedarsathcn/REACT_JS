import image from "../../assets/login-bg.jpg";
import styles from "./Premium.module.css";

const Premium = () => {
  return (
    <section className={styles.premiumContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt="premium_image" />
        <div className={styles.overlay}>
          <h1>
            The <span>Belgian</span> Premium Couch
          </h1>
          <p>COMING SOON</p>
        </div>
      </div>
    </section>
  );
};

export default Premium;