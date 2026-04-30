import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";
import Button from "../button/Button.jsx";
import useCart from "../../hooks/useCart.jsx";
const Cart = () => {
  const { products, handleAddProduct, handleDecreaseProduct,removeFromCart } = useCart();
  return (
    <div className={styles.cartContainer}>
      <p className={styles.myCart}>MY CART</p>
      <div className={styles.cartCardContainer}>
        {products.map((product, _idx) => {
          return <CartCard key={_idx} id={product.id} image={product.image} name={product.name}  price={product.price} quantity={product.quantity} addMore={handleAddProduct} removeMore={handleDecreaseProduct} deleteProduct={removeFromCart}/>;
        })}
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
