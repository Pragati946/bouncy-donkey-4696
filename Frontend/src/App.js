import { useSelector } from "react-redux";
import AllRoutes from "./AllRoutes/AllRoutes";
import CultNavbar from "./Components/CultFit/CultNavbar/CultNavbar";
import CultStoreNavbar from "./Components/CultStore/CultStoreNavbar/CultStoreNavbar";



// import {Store} from "../src/Components/CultStore/Store/Store"
// import CultStoreFooter from "./Components/CultStore/CultStoreFooter/CultStoreFooter";
// import ProductDetails  from "./Pages/CultStore/ProductDetails";
// import Crousel1_cultfit from "./Components/CultFit/Fitness_cultfitPage/Crousel1_cultfit";
// import Footer1_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer1_cultfit";
// import Footer2_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer2_cultfit";
// import Home_cult from "./Components/CultFit/HomePage_cultfit/Home_cult";
// import CultStoreNavbar from "./Components/CultStore/CultStoreNavbar/CultStoreNavbar";
// import AllRoutes from "./AllRoutes/AllRoutes";



function App() {
  const navVal=useSelector((store)=>store.navToggle.nav)
  return (
    <div>
      {navVal?<CultStoreNavbar/>:<CultNavbar />}
      
      <AllRoutes />
      
    </div>
  );
}

export default App;
