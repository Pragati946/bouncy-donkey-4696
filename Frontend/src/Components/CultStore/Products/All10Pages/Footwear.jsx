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
import { getData } from "../../../../Redux/GetData/getData.actions";
import { getButton } from "../../../../Redux/ButtonRoute/button.action";
import Loader from "../../../../utils/Loader";
import CommanButton from "../CommanButton";
import SingleProduct from "../SingleProduct";
import CultStoreNavbar from "../../CultStoreNavbar/CultStoreNavbar";
import CultStoreFooter from "../../CultStoreFooter/CultStoreFooter";

function Footwear() {
  const [a, setA] = useState("footwears");
  const data = useSelector((state) => state?.getData?.data);
  const isLoading = useSelector((state) => state?.getData?.isLoading);
  const route = useSelector((state) => state?.button?.route);
  // const [temp, setTemp] = useState([]);pp;lok,injm
  const dispatch = useDispatch();
  // const [par, setPar] = useState("");
  const [value, setValue] = useState("");
  const [input, setInput] = useState([]);
  const [height, setHeight] = useState(66);
  const INPUT = useSelector((state) => state.inputData.inputData);
  const inputLoading = useSelector((state) => state.inputData.inputLoading);

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
      <CommanButton array={footWear} handleFilter={handleFilter} />

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
        <CultStoreFooter  /> 
    </>
  );
}

export default Footwear;

const footWear = ["FLIP FLOPS", "RUNNING SHOES"];
