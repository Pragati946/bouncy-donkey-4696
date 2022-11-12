import {
  Box,
  Image,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CartCountAdd, CartCountSub, CartDel } from "../../Redux/cart/Cart.actiontypes";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        ref={btnRef}
        _hover={{"backgroundColor":"ff385a"}}
        marginLeft={"10px"}
        borderRadius={"100px"}
        color={"white"}
        bgColor={"#ff385a"}
        onClick={onOpen}
      >
         <BsCart fontSize={"30px"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody >
         
            {cartData.map((item) => (
               
              <Box key={item._id} padding={"10px"} borderTop={"1px solid black"} display={"flex"}>
               
                <Box >
                  <Image
                    width={"180px"}
                    borderRadius="20px"
                    height={"150px"}
                    src={item.image}
                  ></Image>
                </Box>
                <Box marginLeft={"10px"}>
                  <Text>CULTSPORTS</Text>
                  <Text
                    fontFamily={
                      "Inter-Regular, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;"
                    }
                    fontSize={"18px"}
                  >
                    {item.title}
                  </Text>
                  <Text fontSize={"16px"}>Size : UK7</Text>
                  <Text fontSize={"20px"}>{item.price}</Text>
                  <Box
                    display={"flex"}
                    width="80px"
                    border={"2px solid red"}
                    justifyContent="space-between"
                    borderRadius={"100px"}
                    paddingLeft={"12px"}
                    paddingRight={"12px"}
                  >
                    <button disabled={item.count===1} onClick={()=>{dispatch(CartCountSub(item._id))}} color={"red"}>-</button>
                    <Text>{item.count}</Text>
                    <button  width={"10px"} onClick={()=>{dispatch(CartCountAdd(item._id))}} color={"red"}>+</button>
                  </Box>
                </Box>
                <Box 
                  onClick={() => {
                    dispatch(CartDel(item._id));
                  }}
                >
                 <Image width={"15px"} src="https://static.cure.fit/assets/images/modal-close.svg"></Image>
                </Box>
              </Box>
            ))}
          </DrawerBody>

          <DrawerFooter>
            
          <Button width={"100%"} alignSelf={"center"} color={"white"} bgColor={"#ff385a"}>
                BUY NOW
          </Button>
          
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
