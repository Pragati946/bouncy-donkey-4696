import { Box,Image,Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, Input, useDisclosure, Divider } from "@chakra-ui/react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { CartDel } from "../../Redux/cart/Cart.actiontypes"

export  default function Cart() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const  cartData=useSelector(store=>store.cart)
    const dispatch=useDispatch()
  
    return (
      <>
        <Button ref={btnRef} marginLeft={"10px"} borderRadius={"100px"} color={"white"} bgColor={"#ff385a"} onClick={onOpen}>
         View Your Cart
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader >Your Cart</DrawerHeader>
  
            <DrawerBody>
              <Divider/>
              {cartData.map(item=>(<Box marginTop={"20px"} display={"flex"}>
              <Box key={item.id}>
                <Image width={"105px"} borderRadius="20px" height={"140px"} src={item.image}></Image>
              </Box>
              <Box marginLeft={"10px"}>
                <Text>CULTSPORTS</Text>
              <Text fontFamily={"Inter-Regular, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;"} fontSize={"18px"}>{item.title}</Text>
              <Text fontSize={"16px"}>Size : UK7</Text>
              <Text fontSize={"20px"}>{item.price}</Text>
               <Box display={"flex"} width="80px" border={"2px solid red"} justifyContent="space-between" borderRadius={"100px"} paddingLeft={"12px"} paddingRight={"12px"}>
                <Box color={"red"}>-</Box>
                <Text>1</Text>
                <Box color={"red"}>+</Box>
               </Box>
              </Box>
              <Box onClick={()=>{dispatch(CartDel(item.id))}}>X</Box>

              </Box>))}
              
             
              
            </DrawerBody>
  
            <DrawerFooter>
              <Box alignContent={"center"}>
              <Button   color={"white"} bgColor={"#ff385a"} >BUY NOW</Button>
              </Box>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }