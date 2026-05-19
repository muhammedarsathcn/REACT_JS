import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Products from "../pages/products/Products";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layout/MainLayout";
import Premium from "../pages/premium/Premium";

import ProtectedRoute from "./ProtectedRoute";
import Order from "../pages/order/Order";
import OrderProtectRoute from "./OrderProtectRoute";
const RoutePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/products/:category" element={<Products />} />
          <Route
            path="/products/premium"
            element={
              <ProtectedRoute>
                <Premium />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <OrderProtectRoute>
                <Order />
              </OrderProtectRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutePage;
