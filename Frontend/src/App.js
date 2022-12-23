import { useSelector } from "react-redux";
import AllRoutes from "./AllRoutes/AllRoutes";
import CultNavbar from "./Components/CultFit/CultNavbar/CultNavbar";
import CultStoreNavbar from "./Components/CultStore/CultStoreNavbar/CultStoreNavbar";







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

