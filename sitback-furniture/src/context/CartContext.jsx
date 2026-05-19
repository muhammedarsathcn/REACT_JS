import { createContext, useMemo, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const total = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  }, [products]);

  const placeOrders = () => {
    setOrders(products)
    setProducts([])
  }
  const handleAddProduct = (product) => {
    const exists = products.find((oldProduct) => oldProduct.id === product.id);
    if (exists) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
   
    }
  };
  const handleDecreaseProduct = (product) => {
    setProducts(
      products
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  
  };

  const removeFromCart = (product) => {
    setProducts(products.filter((item) => item.id !== product.id));
  
  };
  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        orders,
        handleAddProduct,
        handleDecreaseProduct,
        removeFromCart,
        placeOrders,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
