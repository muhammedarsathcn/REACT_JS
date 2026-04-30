import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";
import Button from "../button/Button.jsx";
import useCart from "../../hooks/useCart.jsx";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const {
    products,
    handleAddProduct,
    handleDecreaseProduct,
    removeFromCart,
    total,
  } = useCart();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/order-confirmation");
  };
  return (
    <div className={styles.cartContainer}>
      <p className={styles.myCart}>MY CART</p>
      <div className={styles.cartCardContainer}>
        {products.map((product, _idx) => {
          return (
            <CartCard
              key={_idx}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              addMore={handleAddProduct}
              removeMore={handleDecreaseProduct}
              deleteProduct={removeFromCart}
            />
          );
        })}
      </div>

      <span className={styles.totalContainer}>
        <span>
          <p className={styles.totalAmount}>TOTAL AMOUNT</p>
          <p>₹{total.toLocaleString("en-IN")}</p>
        </span>

        <span>
          <Button handleOnclick={handleNavigate}>Place Order</Button>
        </span>
      </span>
    </div>
  );
};

export default Cart;
