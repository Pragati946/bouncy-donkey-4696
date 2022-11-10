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

function SingleProduct({ image, price1, price2, off, title, brand, launched }) {
  return (
    <VStack alignItems={"start"} position="relative">
      <Box overflow={"hidden"} borderRadius={"2px"}>
        <Image
          src={image}
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
        px="1"
        display={!launched ? "none" : "flex"}
      >
        Just launched
      </Box>

      <Text color="rgba(0, 0, 0, 0.6)" fontSize={"15px"} letterSpacing=".2px">
        {brand}
      </Text>
      <Heading
        color="rgb(38, 38, 38)"
        fontSize={"14px"}
        letterSpacing=".2px"
        fontWeight="500"
        display={{ base: "none", md: "flex" }}
      >
        {title}
      </Heading>
      <Flex
        alignItems={"center"}
        justifyContent="center"
        gap={{ base: "1", sm: "1", md: "2", lg: "3" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex gap="3">
          <Heading
            color="rgb(38, 38, 38)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="500"
          >
            {price1}
          </Heading>
          <Heading
            color="rgba(0, 0, 0, 0.6)"
            fontSize={"17px"}
            letterSpacing=".2px"
            fontWeight="400"
            as="s"
          >
            {" "}
            {price2}
          </Heading>
        </Flex>
        <Heading
          color=" rgb(255, 50, 120)"
          fontSize={"17px"}
          letterSpacing=".2px"
          fontWeight="500"
        >
          {off}
        </Heading>
      </Flex>
    </VStack>
  );
}

export default SingleProduct;
