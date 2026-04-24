import styles from "./PlaceHero.module.scss";
import HeroImg from "../../assets/HeroImg.png";

const PlaceHero = ({title,city, image}) => {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.leftSection}>
        <p className={styles.heroText}>{city}</p>
        <section className={styles.chooseContainer}>
          <p>{title}</p>
        </section>
        <p className={styles.temperatureWrapper}>32&deg;C</p>
      </section>
      <section className={styles.rightSection}>
        <figure className={styles.heroImageContainer}>
          <img src={image} alt={city} />
        </figure>
      </section>
    </div>
  );
};

export default PlaceHero;
