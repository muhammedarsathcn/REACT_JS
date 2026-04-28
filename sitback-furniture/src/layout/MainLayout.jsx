import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./MainLayout.module.css";
import Cart from "../components/cart/Cart";

// import { CartContext } from "../context/CartContext";

const MainLayout = () => {
  // const { cartItems } = useContext(CartContext);

  const hasCartItems = true;

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
