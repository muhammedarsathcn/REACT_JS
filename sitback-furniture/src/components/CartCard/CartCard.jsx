import styles from "./CartCard.module.css";
import { Trash2 } from "lucide-react";
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
        <p className={styles.price}> ₹{price.toLocaleString("en-IN")}</p>
      </span>
      <span
        className={styles.trashIcon}
        onClick={() =>
          deleteProduct({
            id,
            name,
            price,
            quantity,
            image,
          })
        }
      >
        <Trash2 />
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
