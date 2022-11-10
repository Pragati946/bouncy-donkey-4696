import React from "react";
import { NavbarCare } from "./NavbarCare";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { border, Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import "./Care.module.css";
import { Grid, GridItem } from "@chakra-ui/react";
import data from "./LabtestData.json";

function Care() {
  console.log(data);

let Senierdata = [
  {
    "href": "https://www.cult.fit/care/diagnostic-tests/full-body-checkup",
    "src": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
    "price": "₹ 5999",
    "price_text":"Price",
     "Offer_Price":"Offer Price",
    "discounted_price": "₹ 2990"},
    {
      "href": "https://www.cult.fit/care/diagnostic-tests/full-body-checkup",
      "src": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png",
      "price": "₹ 5999",
      "price_text":"Price",
       "Offer_Price":"Offer Price",
      "discounted_price": "₹ 2990"},
]


  return (
    <div>
      <NavbarCare />
      <Box
        height="70%"
        margin="center"
        alignSelf="auto"
        marginLeft="15%"
        marginRight="15%"
      >
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/aa3e1923-35c9-474a-9725-b805692a668b.png"></Image>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/56ddb91c-6286-490e-99c6-c73dda380f3a.png"
              alt=" Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f061fddb-e946-4348-91e4-ffe9d69dd18a.png"
              className="d-block w-100"
              alt=" One"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/cb1c1e2e-4b01-4920-a67d-46dd89857ced.png"
              alt=" Two"
            />
          </Carousel.Item>
        </Carousel>
      </Box>
      <Box marginLeft="15%" marginRight="15%" marginTop="2%">
        <Text fontWeight='bold' fontSize='25'>Lab Tests</Text>
        <p>Assess and monitor your health from the comfort of your home now.</p>
        <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(5, 1fr)"}} gap={6}>
          {data.map((e) => {
            return (
              <GridItem   _hover={{transition:'all 0.3s ease-in',border:'4px solid transparent'}} w="100%" >
                <Image borderRadius='5px' src={e.src}></Image>
                <Box display='flex' justifyContent='space-between' marginBottom='0px' >
                <Text>{e.price_text}</Text>
                <Text decoration='line-through' color='grey' >{e.price}</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' marginTop='-2px' >
                <Text >{e.Offer_Price}</Text>
                <Text  fontWeight='bold' >{e.discounted_price}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
        <Divider bgColor='black' height='0.5px' color='black' lineHeight='20px' />


      </Box>
    </div>
  );
}

export default Care;
