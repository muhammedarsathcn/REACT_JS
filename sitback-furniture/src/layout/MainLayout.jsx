import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./MainLayout.module.css";
import Cart from "../components/cart/Cart";
import useCart from "../hooks/useCart";

// import { CartContext } from "../context/CartContext";

const MainLayout = () => {
  const { products } = useCart();

  const hasCartItems = products.length > 0;

  return (
    <>
      <Header />
      <main
        className={`${styles.mainLayout} ${
          hasCartItems ? styles.withCart : styles.fullWidth
        }`}
      >
        <section className={styles.mainSections}>
          <Outlet />
        </section>
        {hasCartItems && (
          <section className={styles.cartSection}>
            <Cart />
          </section>
        )}
      </main>
    </>
  );
};

export default MainLayout;
