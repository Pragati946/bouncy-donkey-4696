
function App() {
  return (
    <div>
   
import { Heading } from "@chakra-ui/react";

import {Store} from "../src/Components/CultStore/Store/Store"
import CultStoreFooter from "./Components/CultStore/CultStoreFooter/CultStoreFooter";
import ProductDetails from "./Pages/CultStore/ProductDetails";
import Crousel1_cultfit from "./Components/CultFit/Fitness_cultfitPage/Crousel1_cultfit";
import Footer1_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer1_cultfit";
import Footer2_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer2_cultfit";
import Home_cult from "./Components/CultFit/HomePage_cultfit/Home_cult";





function App() {
  return (
    <div>

      {/* <Heading>Cultfit</Heading> */}

      <Store/>
      <CultStoreFooter></CultStoreFooter>
      <ProductDetails></ProductDetails>

     <Home_cult/>
  {/* <Crousel1_cultfit></Crousel1_cultfit> */}

      {/* <Footer1_cultfit />  
      <Footer2_cultfit />   */}



    </div>
  );
}

export default App;
