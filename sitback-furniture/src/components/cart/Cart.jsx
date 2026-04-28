import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";
import Button from "../button/Button.jsx";
const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <p className={styles.myCart}>MY CART</p>
      <div className={styles.cartCardContainer}>
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <span className={styles.totalContainer}>
        <span>
          <p className={styles.totalAmount}>TOTAL AMOUNT</p>
          <p>₹ 51,950</p>
        </span>
     
        <span>
          <Button>Place Order</Button>
        </span>
      </span>
    </div>
  );
};

export default Cart;
