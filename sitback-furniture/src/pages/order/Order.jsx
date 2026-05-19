
import Card from "../../components/card/Card";
import { useAuth } from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import styles from "./Order.module.css";
const Order = () => {
  const { orders } = useCart();
  const { name } = useAuth();

  console.log(orders)
  return (
    <div className={styles.orderContainer}>
      <p className={styles.orderHeading}>Order Confirmation</p>
      <p className={styles.orderGreeting}>
        Thank you {name}, for shopping with us. The items will be delivered
        within 7 days
      </p>
      <div className={styles.orderWrapper}>
        {orders.map((product, _idx) => {
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
