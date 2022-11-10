import { Heading } from "@chakra-ui/react";
import {Store} from "../src/Components/CultStore/Store/Store"
import CultStoreFooter from "./Components/CultStore/CultStoreFooter/CultStoreFooter";
import ProductDetails from "./Pages/CultStore/ProductDetails";
function App() {
  return (
    <div>
      {/* <Heading>Cultfit</Heading> */}
      <Store/>
      <CultStoreFooter></CultStoreFooter>
      <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
