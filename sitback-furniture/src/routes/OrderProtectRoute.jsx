
import useCart from "../hooks/useCart";
import { Navigate } from "react-router-dom";

const OrderProtectRoute = ({ children }) => {
  const { orders } = useCart();

  if (orders.length <= 0) {
    return <Navigate to={"/products/couch"} />;
  }
  return <div>{children}</div>;
};

export default OrderProtectRoute;
