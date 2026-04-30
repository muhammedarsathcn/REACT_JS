import styles from "./Card.module.css";
import Button from "../button/Button";
import { ShieldCheck } from "lucide-react";
import useCart from "../../hooks/useCart";
const Card = ({ id, name, price, description, guarantee, image }) => {
  const { handleAddProduct } = useCart();
  return (
    <article className={styles.cardContainer}>
      <figure className={styles.imageContainer}>
        <img src={image} alt="image" />
      </figure>
      <span className={styles.titleAndPrice}>
        <p>{name}</p>
        <p>₹{price}</p>
      </span>
      <p className={styles.description}>{description}</p>
      <p className={styles.guarantee}>
        <span>
          <ShieldCheck />
        </span>
        {guarantee}
      </p>
      <div className={styles.btnContainer}>
        <Button
          handleOnclick={() =>
            handleAddProduct({
              id,
              name,
              price,
              image,
            })
          }
        >
          ADD TO CART
        </Button>
      </div>
    </article>
  );
};

export default Card;
