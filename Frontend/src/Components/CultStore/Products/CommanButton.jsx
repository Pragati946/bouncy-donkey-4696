import { Button, Flex, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

function CommanButton({ array }) {
  const [color, setColor] = useState(false);
  const curr_id = useRef(null);
  const handleClick = (el) => {
    setColor(!color);
    color ? (curr_id.current = el) : (curr_id.current = null);
  };

  return (
    <Grid
      gridTemplateColumns={{
        base: "repeat(4,1fr)",
        sm: "repeat(5,1fr)",
        md: "repaet(7,1fr)",
        lg: "repeat(11,1fr)",
      }}
      w="85%"
      m="auto"
      gap="2"
    >
      {array?.map((el) => {
        return (
          <Button
            key={el}
            variant="outline"
            color={curr_id.current == el ? "white" : " #333"}
            _hover={{ bgColor: "none" }}
            bgColor={curr_id.current == el ? "rgb(255, 50, 120)" : "white"}
            onClick={() => handleClick(el)}
            size="sm"
            py="4"
          >
            {el}
          </Button>
        );
      })}
    </Grid>
  );
}

export default CommanButton;
