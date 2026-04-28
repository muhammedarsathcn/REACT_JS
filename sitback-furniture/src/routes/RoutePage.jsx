import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Couches from "../pages/couches/Couches";
import NotFound from "../pages/not-found/NotFound";
import MainLayout from "../layout/MainLayout";
import Premium from "../pages/premium/Premium";
import Chairs from "../pages/chairs/Chairs";
const RoutePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/products/couches" element={<Couches />} />
          <Route path="/products/chairs" element={<Chairs />} />
          <Route path="/products/premium" element={<Premium />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutePage;
