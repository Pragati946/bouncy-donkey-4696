import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsArrowsExpand } from "react-icons/bs";

function SortByPrice({ handleLH, handleHL }) {
  return (
    <Menu bgColor="white">
      <MenuButton
        as={Button}
        rightIcon={<BsArrowsExpand />}
        border="1px solid #A9A9A9"
        bgColor="white"
        _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
        fontSize="15px"
        fontWeight={"600"}
        letterSpacing={".5px"}
      >
        Sort by Price
      </MenuButton>
      <MenuList>
        <MenuItem
          minH="48px"
          gap={"2"}
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          onClick={handleHL}
        >
          <FcMoneyTransfer />
          <span>Price: High to low</span>
        </MenuItem>
        <MenuItem
          minH="40px"
          gap={"2"}
          _hover={{ bgColor: "rgb(255, 50, 120)", color: "white" }}
          onClick={handleLH}
        >
          <FcMoneyTransfer />
          <span>Price Low to high</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default SortByPrice;
