import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../Redux/GetData/getData.actions";
import CommanButton from "../CommanButton";
import SortByPrice from "../FilterByPrice";
import SingleProduct from "../SingleProduct";
import InputSearch from "../InputSearch";
import CultStoreNavbar from "../../CultStoreNavbar/CultStoreNavbar";
import StoreHome from "../../CultStoreHome/StoreHome";
import CultStoreFooter from "../../CultStoreFooter/CultStoreFooter";
import FitnessFAQs from "../../../../Pages/cultFit_Pages/FitnessFAQs";

function AllProducts() {
  const data = useSelector((state) => state?.getData?.data);
  const isLoading = useSelector((state) => state?.getData?.isLoading);
  const route = useSelector((state) => state?.button?.route);
  const [temp, setTemp] = useState([]);
  const dispatch = useDispatch();
  const [par, setPar] = useState("");

  useEffect(() => {
    setTemp(data);
  }, [data]);

  const handleFilter = (el) => {
    dispatch(getData(route, el));
    setPar(el);
  };

  const handleGet = (el) => {
    dispatch(getData(el));
    setTemp(data);
  };

  const handleLH = () => {
    const validate1 = temp?.map((elem) => {
      return { ...elem };
    });
    setTemp(
      validate1?.sort((a, b) => {
        return (
          Number(a.price1.trim().substring(2)) -
          Number(b.price1.trim().substring(2))
        );
      })
    );
  };

  const handleHL = () => {
    const validate1 = temp?.map((elem) => {
      return { ...elem };
    });
    setTemp(
      validate1?.sort((a, b) => {
        return (
          Number(b.price1.trim().substring(2)) -
          Number(a.price1.trim().substring(2))
        );
      })
    );
  };

  const hanldeOff = () => {
    const validate = data?.filter((elem) => {
      if (Number(elem.off.substring(0, 2)) < 30) {
        return elem;
      }
    });
    console.log("validate", validate);
  };

  return isLoading ? (
    <Heading>....Loading</Heading>
  ) : (
    <>
      <CultStoreNavbar />

      {route == "" ? <StoreHome /> : ""}
      <Flex
        // border="2px solid red"
        w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
        m="auto"
        fontFamily={"sans-serif"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Flex>
          <Text fontSize={"13px"} letterSpacing=".8px" as="samp">
            {" "}
            <span
              style={{ color: "gray", fontSize: "13px", letterSpacing: ".8px" }}
            >
              Home
            </span>{" "}
            <Link onClick={() => handleGet(route)}>
              {route != "" ? `- ${route}` : ""}
            </Link>
            <span style={{ fontSize: "12px", letterSpacing: ".8px" }}>
              {" "}
              {par != "" ? `- ${par}` : ""}
            </span>
          </Text>
        </Flex>
        <Flex
          // border="2px solid blue"
          justifyContent={"space-between"}
          alignItems="center"
        >
          {/* <InputSearch /> */}
          <Button onClick={hanldeOff}>More then 40</Button>
          <SortByPrice handleLH={handleLH} handleHL={handleHL} />
        </Flex>
      </Flex>
      <br />
      {route == "topSellings" ? (
        <CommanButton array={bestSellings} handleFilter={handleFilter} />
      ) : route == "topArrivals" ? (
        <CommanButton array={newArrivals} handleFilter={handleFilter} />
      ) : route == "mens" ? (
        <CommanButton array={mens} handleFilter={handleFilter} />
      ) : route == "womens" ? (
        <CommanButton array={women} handleFilter={handleFilter} />
      ) : route == "footwears" ? (
        <CommanButton array={footWear} handleFilter={handleFilter} />
      ) : route == "cardio" ? (
        <CommanButton array={cardio} handleFilter={handleFilter} />
      ) : route == "cycles" ? (
        <CommanButton array={cycles} handleFilter={handleFilter} />
      ) : route == "accessories" ? (
        <CommanButton array={accessrories} handleFilter={handleFilter} />
      ) : route == "supplements" ? (
        <CommanButton array={supplements} handleFilter={handleFilter} />
      ) : route == "equipments" ? (
        <CommanButton array={equipemnts} handleFilter={handleFilter} />
      ) : (
        ""
      )}
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
        {temp?.map((el) => {
          return <SingleProduct {...el} key={el._id} />;
        })}
        </Grid>
        
      <CultStoreFooter />
    </>
  );
}

export default AllProducts;

const bestSellings = [
  "SLIDES",
  "T-SHIRT",
  "SHORTS",
  "TIGHTS",
  "SPORTS BRA",
  "TANK TOP",
  "SWEATSHIRT",
  "CROP TOP",
  "JOGGERS",
  "TRACKPANTS",
  "TRACK SUIT",
];

const newArrivals = [
  "ELECTRIC CYCLE",
  "FLIP FLOPS",
  "GIFT BOX",
  "TSHIRT",
  "TIGHTS",
  "SHORTS",
  "SPORTS BRA",
  "JOGGERS",
  "TRACK PANTS",
  "JACKET",
  "SPIN BIKE",
];

const mens = [
  "T-SHIRT",
  "POLO T-SHIRT",
  "SHORTS",
  "TANK TOP",
  "SWEATSHIRT",
  "JOGGERS",
  "TRACK SUIT",
  "JACKET",
  "SOCKS",
];

const women = [
  "GIFT BOX",
  "T-SHIRT",
  "TIGHTS",
  "POLO T-SHIRT",
  "SHORTS",
  "SPORTS BRA",
  "TANK TOP",
  "SWEATSHIRT",
  "CROP TOP",
  "JOGGERS",
  "JACKET",
];

const footWear = ["FLIP FLOPS", "RUNNING SHOES"];

const cardio = [
  "EXERCISE BIKE",
  "SPIN BIKE",
  "WATER ROWER",
  "TREADMILL",
  "ROWER",
];

const cycles = ["ELECTRIC CYCLE", "SHIMANO GEARS", "WIRE BRAKE", "KIDS CYCLE"];

const accessrories = [
  "YOGA MAT",
  "HAND TOWEL",
  "ROPE",
  "BATH TOWEL",
  "SIPPER",
  "SOCKS",
  "GLOVES",
  "WORKOUT GLOVES",
];

const supplements = [
  "VITAMINS AND MINERALS",
  "HAIR MASK",
  "SNAKES",
  "PEANUT BUTTER",
  "PROTEIN",
  "CREAM",
];

const equipemnts = [
  "GIFT BOX",
  "PUSH UP BAR",
  "RESISTANCE TUBE",
  "WATER BAG",
  "YOGA MAT",
  "JUMPING ROPE",
  "HAND TOWEL",
  "WEIGHT LIFTING BELT",
  "KNEE PROTECTOR",
];
