import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CommanButton from "../CommanButton";
import SingleProduct from "../SingleProduct";

function BestSellers() {
  return (
    <>
      <br />
      <CommanButton array={btnArray} />
      <Grid
        gridTemplateColumns="repeat(4,1fr)"
        gap={"4"}
        w="85%"
        m="auto"
        fontFamily={"sans-serif"}
        mt="5"
        position={"relative"}
      >
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </Grid>
    </>
  );
}

export default BestSellers;

const btnArray = [
  "FLIP FLOPS",
  "T-SHIRTS",
  "SHORTS",
  "TIGHTS",
  "SPORTS BRA",
  "TANK TOP",
  "SWAETSHIRT",
  "CROP TOP",
  "JOGGERS",
  "TRACK PANTS",
  "TRACK SUIT",
];

const mens = [
  "FLIP FLOPS",
  "T-SHIRTS",
  "SHORTS",
  "TIGHTS",
  "SPORTS BRA",
  "TANK TOP",
  "SWAETSHIRT",
  "CROP TOP",
  "JOGGERS",
  "TRACK PANTS",
  "TRACK SUIT",
];
