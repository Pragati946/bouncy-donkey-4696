
import { Heading } from "@chakra-ui/react";
import Crousel1_cultfit from "./Components/CultFit/Fitness_cultfitPage/Crousel1_cultfit";
import Footer1_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer1_cultfit";
import Footer2_cultfit from "./Components/CultFit/Footer/Footer1_cultfit/Footer2_cultfit";
import Home_cult from "./Components/CultFit/HomePage_cultfit/Home_cult";
import StoreHome from "./Components/CultStore/CultStoreHome/StoreHome";
import CultStoreNavbar from "./Components/CultStore/CultStoreNavbar/CultStoreNavbar";



import CultNavbar from './Components/CultFit/CultNavbar/CultNavbar';


function App() {
  return (
    <div>

      {/* <Heading>Cultfit</Heading> */}
{/* <Home_cult/> */}
{/* <Crousel1_cultfit></Crousel1_cultfit> */}

      {/* <Footer1_cultfit />  
      <Footer2_cultfit />   */}

<CultStoreNavbar/>
<StoreHome />


<CultNavbar/>
    </div>
  );
}

export default App;
