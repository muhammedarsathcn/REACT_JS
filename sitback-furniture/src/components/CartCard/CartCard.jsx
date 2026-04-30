import styles from "./CartCard.module.css";
const CartCard = ({
  id,
  image,
  name,
  price,
  quantity,
  addMore,
  removeMore,
  deleteProduct,
}) => {
  return (
    <div className={styles.cartCardContainer}>
      <figure className={styles.imageContainer}>
        <img src={image} alt="" />
      </figure>
      <span className={styles.descriptionAndPrice}>
        <p>{name}</p>
        <p className={styles.price}> ₹{price}</p>
      </span>
      <span className={styles.incrementAndDecrementContainer}>
        <span
          className={styles.increment}
          onClick={() =>
            removeMore({
              id,
              name,
              price,
              quantity,
              image,
            })
          }
        >
          -
        </span>
        <p>{quantity}</p>
        <span
          className={styles.decrement}
          onClick={() =>
            addMore({
              id,
              name,
              price,
              quantity,
              image,
            })
          }
        >
          +
        </span>
      </span>
    </div>
  );
};

export default CartCard;
