import Card from "../../components/card/Card";
import useCart from "../../hooks/useCart";
import styles from "./Order.module.css";
const Order = () => {
  const { products } = useCart();

  return (
    <div className={styles.orderContainer}>
      <p className={styles.orderHeading}>Order Confirmation</p>
      <p className={styles.orderGreeting}>
        Thank you Nijin, for shopping with us. The items will be delivered
        within 7 days
      </p>
      <div className={styles.orderWrapper}>
        {products.map((product, _idx) => {
          return (
            <Card
              id={product.id}
              name={product.name}
              image={product.image}
              isOrder={true}
              quantity={product.quantity}
              price={product.price}
              description={product.description}
              key={_idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Order;
