import React from "react";
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
import { BsFillHeartFill } from "react-icons/bs";

function SingleProduct() {
  return (
    <VStack alignItems={"start"} position="relative">
      <Box overflow={"hidden"} borderRadius={"2px"}>
        <Image
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf"
          _hover={{
            transform: "scale(1.1)",
            transformOrigin: "50% 50%",
            cursor: "pointer",
            opacity: ".9",
          }}
          transition="transform .5s"
        />
      </Box>
      <Box
        position="absolute"
        top="1%"
        right="3%"
        _hover={{ cursor: "pointer", color: "blue" }}
      >
        <BsFillHeartFill
          fontSize={"32px"}
          color="rgb(255, 50, 120)"
          _hover={{ color: "blue" }}
        />
      </Box>
      <Box
        position={"absolute"}
        bgColor={"rgb(227, 226, 252)"}
        color="rgb(115, 108, 240)"
        fontSize="12px"
              top="0%"
              px='1'
      >
        Just launched
      </Box>

      <Text color="rgba(0, 0, 0, 0.6)" fontSize={"17px"} letterSpacing=".2px">
        cultsport
      </Text>
      <Heading
        color="rgb(38, 38, 38)"
        fontSize={"17px"}
        letterSpacing=".2px"
        fontWeight="500"
      >
        Firebird Running Shoe
      </Heading>
      <Flex alignItems={"center"} justifyContent="center" gap="3">
        <Heading
          color="rgb(38, 38, 38)"
          fontSize={"18px"}
          letterSpacing=".2px"
          fontWeight="500"
        >
          ₹ 3249
        </Heading>
        <Heading
          color="rgba(0, 0, 0, 0.6)"
          fontSize={"18px"}
          letterSpacing=".2px"
          fontWeight="400"
          as="s"
        >
          {" "}
          ₹ 3499
        </Heading>
        <Heading
          color=" rgb(255, 50, 120)"
          fontSize={"18px"}
          letterSpacing=".2px"
          fontWeight="500"
        >
          26 % Off
        </Heading>
      </Flex>
    </VStack>
  );
}

export default SingleProduct;
