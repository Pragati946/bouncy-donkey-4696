import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const FAQ = () => {
  return (
    <Box
      bg="grey"
      w="100%"
      paddingLeft="15%"
      paddingRight="15%"
      paddingBottom="50px"
    >
      <Box
        paddingTop="5%"
        display="flex"
        textAlign="center"
        justifyContent="space-between"
      >
        <Text color="white" fontWeight="bold" fontSize="240%">
          FAQ'S
        </Text>
        <Text color="white" marginTop="15px">
          See All
        </Text>
      </Box>
      <Text paddingBottom="4%" color="white" marginTop="10px">
      2 QUESTIONS
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                margin="10px"
                color="#cccfd1"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="150%"
              >
                What is cultsport and what does it offer?
              </Box>
              <AccordionIcon color="#cccfd1" boxSize="32px" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            marginLeft="2%"
            marginRight="40%"
            color="#cccfd1"
            fontWeight="semibold"
            fontSize="110%"
            pb={4}
          >
            cultsport is a premium workout wear brand from the house of
            cure.fit. cultsport offers a variety of premium workout and sports
            gear that helps fitness enthusiasts and everyday athletes up their
            daily fitness game and look good while they are at it. With a goal
            to bring top notch products with a foot forward in fashion,
            longevity and functionality, cultsport attempts at bringing the best
            performing apparel, footgear and accessories ideal for all workout
            formats. Read here to know in detail how cultsport is designed to
            enhance your workout here.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                margin="10px"
                color="#cccfd1"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                fontSize="150%"
              >
                What makes cultsport special?
              </Box>
              <AccordionIcon color="#cccfd1" boxSize="32px" />
            </AccordionButton>
          </h2>
          <AccordionPanel
            marginLeft="2%"
            marginRight="40%"
            color="#cccfd1"
            fontWeight="semibold"
            fontSize="110%"
            pb={4}
          >
            cultsport is a carefully crafted array of apparel and accessories
            which aims to ensure that you wear fabric exactly suited to the
            activity you wish to engage in. Be it fly-dry fabrics to ensure
            superior sweat absorption and drying, stretchable fabrics to help
            your workout movement range, breathable ones to aid your running
            experience and design elements that ensure minimal chafing and odour
            resistance (anti-microbial elements). We've got them all! Read here
            to know in detail how cultsport is designed to enhance your workout.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
