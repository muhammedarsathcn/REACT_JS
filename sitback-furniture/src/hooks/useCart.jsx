import  { useContext } from "react";
import CartContext from "../context/CartContext";

const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("Cart context is not found");
  return ctx;
};

export default useCart;
