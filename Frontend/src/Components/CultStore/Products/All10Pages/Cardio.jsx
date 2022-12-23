import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../utils/Loader";
import CommanButton from "../CommanButton";
import SingleProduct from "../SingleProduct";
import { getData } from "../../../../Redux/GetData/getData.actions";
import { getButton } from "../../../../Redux/ButtonRoute/button.action";
import CultStoreNavbar from "../../CultStoreNavbar/CultStoreNavbar";
import CultStoreFooter from "../../CultStoreFooter/CultStoreFooter";

function Cardio() {
  const [a, setA] = useState("cardio");
  const data = useSelector((state) => state?.getData?.data);
  const isLoading = useSelector((state) => state?.getData?.isLoading);
  const route = useSelector((state) => state?.button?.route);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(a));
    dispatch(getButton(a));
  }, []);

  const handleFilter = (el) => {
    dispatch(getData(a, el));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      
      <br />
      <CommanButton array={cardio} handleFilter={handleFilter} />

      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={{ base: "2", sm: "3", md: "4", lg: "6" }}
        rowGap="6"
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        fontFamily={"sans-serif"}
        mt="5"
        position={"relative"}
      >
        {data?.map((el) => {
          return <SingleProduct {...el} key={el._id} />;
        })}
      </Grid>
      <br />
      <br />
      <CultStoreFooter />
    </>
  );
}

export default Cardio;

const cardio = [
  "EXERCISE BIKE",
  "SPIN BIKE",
  "WATER ROWER",
  "TREADMILL",
  "ROWER",
];
