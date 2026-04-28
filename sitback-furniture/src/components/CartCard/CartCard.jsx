import image from "../../assets/login-bg.jpg";
import styles from "./CartCard.module.css";
const CartCard = () => {
  return (
    <div className={styles.cartCardContainer}>
      <figure className={styles.imageContainer}>
        <img src={image} alt="" />
      </figure>
      <span className={styles.descriptionAndPrice}>
        <p>Three yellow seater </p>
        <p className={styles.price}> ₹ 29,000</p>
      </span>
      <span className={styles.incrementAndDecrementContainer}>
        <span className={styles.increment}>-</span>
        <p>1</p>
        <span className={styles.decrement}>+</span>
          </span>
    </div>
  );
};

export default CartCard;
