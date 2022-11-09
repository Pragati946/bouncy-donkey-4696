import React from "react";
import { NavbarCare } from "./NavbarCare";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Box, Image, Text } from "@chakra-ui/react";
import "./Care.module.css";
import { Grid, GridItem } from "@chakra-ui/react";
import data from "./LabtestData.json";

function Care() {
  console.log(data);

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
        <h3>Lab Tests</h3>
        <p>Assess and monitor your health from the comfort of your home now.</p>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {data.map((e) => {
            return (
              <GridItem w="100%" >
                <Image borderRadius='5px' src={e.src}></Image>
                <Box display='flex' justifyContent='space-between' marginBottom='0px' >
                <Text>{e.price_text}</Text>
                <Text decoration='line-through' color='grey' >{e.price}</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' marginTop='-12px' >
                <Text >{e.Offer_Price}</Text>
                <Text  fontWeight='bold' >{e.discounted_price}</Text>
                </Box>
              </GridItem>
            );
          })}

          {/* <GridItem w='100%' h='52' bg='blue.500' />
  <GridItem w='100%' h='52' bg='blue.500' />
  <GridItem w='100%' h='52' bg='blue.500' />
  <GridItem w='100%' h='52' bg='blue.500' /> */}
        </Grid>
        <div height="400px">h</div>
      </Box>
    </div>
  );
}

export default Care;
