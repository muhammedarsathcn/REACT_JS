import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Couches from "../pages/couches/Couches";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layout/MainLayout";
import Premium from "../pages/premium/Premium";
import Chairs from "../pages/chairs/Chairs";
import ProtectedRoute from "./ProtectedRoute";
import Order from "../pages/order/Order";
const RoutePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/products/couches" element={<Couches />} />
          <Route path="/products/chairs" element={<Chairs />} />
          <Route
            path="/products/premium"
            element={
              <ProtectedRoute>
                <Premium />
              </ProtectedRoute>
            }
          />
        <Route path="/order-confirmation" element={<Order />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutePage;
