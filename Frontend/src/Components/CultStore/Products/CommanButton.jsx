import { Button, Flex, Grid, HStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

function CommanButton({ array, handleFilter }) {
  const curr_id = useRef(null);
  const handleClick = (el) => {
    curr_id.current = el;
    handleFilter(el);
  };
  curr_id.current = null;

  return (
    <Wrap
      w={{ base: "96%", sm: "95%", md: "90%", lg: "85%" }}
      m="auto"
      gap={{ base: "2", sm: "3", md: "4", lg: "6" }}
      fontFamily={"sans-serif"}
      overflow="hidden"
    >
      {array?.map((el) => {
        return (
          <WrapItem key={el}>
            <Button
              variant="outline"
              bgColor={curr_id.current == el ? "rgb(255, 50, 120)" : "white"}
              onClick={() => handleClick(el)}
              size="sm"
              py="4"
              w="fit-content"
              _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
            >
              {el}
            </Button>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default CommanButton;
