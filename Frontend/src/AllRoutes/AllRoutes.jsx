import { Routes, Route } from "react-router-dom";
import Care from "../Components/CultFit/Care/Care";
import Mind from "../Components/CultFit/Mind/Mind";
import Fitness_Page from "../Pages/cultFit_Pages/FitnessPage_cultfit";
import Home_cult from "../Pages/cultFit_Pages/Home_cult";
import ProductDetails from "../Pages/CultStore/ProductDetails";
import StoreHome from "../Components/CultStore/CultStoreHome/StoreHome";
import Accessories from "../Components/CultStore/Products/All10Pages/Accessories";
import BestSellers from "../Components/CultStore/Products/All10Pages/BestSeller";
import Cardio from "../Components/CultStore/Products/All10Pages/Cardio";
import Cycles from "../Components/CultStore/Products/All10Pages/Cycles";
import Footwear from "../Components/CultStore/Products/All10Pages/Footwear";
import NewArrivals from "../Components/CultStore/Products/All10Pages/NewArrivals";
import Supplements from "../Components/CultStore/Products/All10Pages/Supplements";
import Womens from "../Components/CultStore/Products/All10Pages/women";
import Mens from "../Components/CultStore/Products/All10Pages/Mens";
import Equipments from "../Components/CultStore/Products/All10Pages/Equipments";
import Checkout from "../Pages/Checkout";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home_cult />}></Route>
      <Route path="/fitness" element={<Fitness_Page />}></Route>
      <Route path="/care" element={<Care />}></Route>
      <Route path="/mind" element={<Mind />}></Route>
      <Route path="/store" element={<StoreHome/>}></Route>
      <Route path="/mens" element={<Mens />}></Route>
      <Route path="/womens" element={<Womens />}></Route>
      <Route path="/topSellings" element={<BestSellers />}></Route>
      <Route path="/topArrivals" element={<NewArrivals />}></Route>
      <Route path="/footwears" element={<Footwear />}></Route>
      <Route path="/cardio" element={<Cardio />}></Route>
      <Route path="/cycles" element={<Cycles />}></Route>
      <Route path="/accessories" element={<Accessories />}></Route>
      <Route path="/supplements" element={<Supplements />}></Route>
      <Route path="/equipments" element={<Equipments />}></Route>
   
      <Route
        path="/:category/:id"
        element={<ProductDetails></ProductDetails>}
      ></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
}
