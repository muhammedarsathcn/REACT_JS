import styles from "./Card.module.css";
import image from "../../assets/login-bg.jpg";
import Button from "../button/Button";
import { ShieldCheck } from 'lucide-react';
const Card = () => {
  return (
    <article className={styles.cardContainer}>
      <figure className={styles.imageContainer}>
        <img src={image} alt="image" />
      </figure>
      <span className={styles.titleAndPrice}>
        <p>Wood Single Sofa Set - 3 sets</p>
        <p>₹ 26,000</p>
      </span>
      <p className={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        quidem facilis natus necessitatibus soluta, beat Blanditiis quidem
        facilis natus necessitatibus soluta, beat
      </p>
      <p className={styles.guarantee}><span><ShieldCheck/></span>2 YEARS GUARANTEE</p>
      <div className={styles.btnContainer}>
        <Button>ADD TO CART</Button>
      </div>
    </article>
  );
};

export default Card;
