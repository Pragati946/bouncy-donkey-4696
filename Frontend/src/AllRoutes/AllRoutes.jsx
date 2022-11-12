import { Routes,Route } from "react-router-dom";
import ProductDetails from "../Pages/CultStore/ProductDetails";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/:category/:id" element={<ProductDetails></ProductDetails>}></Route>
        </Routes>
    )
}