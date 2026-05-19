import styles from "./Card.module.css";
import Button from "../button/Button";
import { ShieldCheck } from "lucide-react";
import useCart from "../../hooks/useCart";
const Card = ({
  id,
  name,
  price,
  description,
  guarantee,
  image,
  quantity,
  isOrder = false,
}) => {
  const { handleAddProduct } = useCart();
  return (
    <article className={styles.cardContainer}>
      <figure className={styles.imageContainer}>
        <img src={image} alt="image" />
      </figure>
      <span className={styles.titleAndPrice}>
        <p>{name}</p>
        <p>₹{price.toLocaleString("en-IN")}</p>
      </span>

      <div className={styles.description}>
        {quantity && <p className={styles.quantity}>Quantity: {quantity}</p>}
        <p>{description}</p>
      </div>
      {!isOrder && (
        <p className={styles.guarantee}>
          <span>
            <ShieldCheck />
          </span>
          {guarantee}
        </p>
      )}
      {!isOrder && (
        <div className={styles.btnContainer}>
          <Button
            handleOnclick={() =>
              handleAddProduct({
                id,
                name,
                price,
                image,
                description,
              })
            }
          >
            ADD TO CART
          </Button>
        </div>
      )}
    </article>
  );
};

export default Card;
