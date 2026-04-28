import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../Layout/Layout";
import Hotels from "../pages/Hotels/Hotel";
import Bikes from "../pages/Bikes/Bike";
import Restaurants from "../pages/Restaurants/Restaurants";
const Routings = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:place" element={<Detail />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/bike-rentals" element={<Bikes />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routings;
