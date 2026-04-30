import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./MainLayout.module.css";
import Cart from "../components/cart/Cart";
import useCart from "../hooks/useCart";

// import { CartContext } from "../context/CartContext";

const MainLayout = () => {
  const { products } = useCart();
  const path = useLocation();
  const location = path.pathname;
  const hideCartRoutes = ["/order-confirmation"];

  const isCart = products.length > 0 && !hideCartRoutes.includes(location);

  return (
    <>
      <Header />
      <main
        className={`${styles.mainLayout} ${
          isCart ? styles.withCart : styles.fullWidth
        }`}
      >
        <section className={styles.mainSections}>
          <Outlet />
        </section>
        {isCart && (
          <section className={styles.cartSection}>
            <Cart />
          </section>
        )}
      </main>
    </>
  );
};

export default MainLayout;
