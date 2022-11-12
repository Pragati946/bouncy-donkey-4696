import { Routes, Route } from "react-router-dom";
import Care from "../Components/CultFit/Care/Care";
import Mind from "../Components/CultFit/Mind/Mind";
import AllProducts from "../Components/CultStore/Products/AllProduct/AllProducts";
import Fitness_Page from "../Pages/cultFit_Pages/FitnessPage_cultfit";
import Home_cult from "../Pages/cultFit_Pages/Home_cult";
import ProductDetails from "../Pages/CultStore/ProductDetails";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home_cult />}></Route>
      <Route path="/fitness" element={<Fitness_Page />}></Route>
      <Route path="/care" element={<Care />}></Route>
      <Route path="/mind" element={<Mind />}></Route>
      <Route path="/store" element={<AllProducts />}></Route>
      <Route
        path="/:category/:id"
        element={<ProductDetails></ProductDetails>}
      ></Route>
    </Routes>
  );
}
