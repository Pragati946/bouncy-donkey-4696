import { Box, Button, Divider, Heading,Image,Input,Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CultStoreFooter from "../Components/CultStore/CultStoreFooter/CultStoreFooter";
import CultStoreNavbar from "../Components/CultStore/CultStoreNavbar/CultStoreNavbar";
import { CartCountAdd, CartCountSub, CartDel } from "../Redux/cart/Cart.actiontypes"
import Payment from "./CultStore/Payment";





export default function Checkout(){
 

 
    const cartData = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const [value,setValue]=useState(0);
    const totalprice=cartData.reduce((a,b)=>{
    let price=b.price1.split(" ")
     price=+price[1];
   let pro=b.count*price
     return a=a+pro
},0)
console.log(totalprice)

return(
    <>
    <CultStoreNavbar/>
     <Box margin={"auto"} marginBottom="30px" width={"90%"}  display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)"]} >
<Box>
{cartData.map((item) => (
               
               <Box width={"379px"} margin="10px" key={item._id} padding={"20px"} borderTop={"1px solid black"} display={"flex"}>
                
                 <Box  >
                   <Image
                     width={"150px"}
                     borderRadius="20px"
                     height={"170px"}
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
                   <Text fontSize={"20px"}>{item.price1}</Text>
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
</Box>

<Box >
    <Box margin={"10px"} display={"flex"} justifyContent="space-between">
    <Heading  fontSize={"14px"} color="rgb(107, 107, 107)">Address  </Heading><Input type={"Text"} width={["300px","400px"]}  placeholder="address" />
    </Box>
    <Box margin={"10px"} display={"flex"} justifyContent="space-between">
    <Heading  fontSize={"14px"} color="rgb(107, 107, 107)">Pin Code  </Heading><Input type={"number"}  width={["300px","400px"]}  placeholder="pincode" />
    </Box>
    <Box margin={"10px"} display={"flex"} justifyContent="space-between">
    <Heading  fontSize={"14px"} color="rgb(107, 107, 107)">City  </Heading><Input type={"Text"} width={["300px","400px"]}  placeholder="city" />
    </Box>
    <Box margin={"10px"} display={"flex"} justifyContent="space-between" marginBottom={"10px"}>
    <Heading  fontSize={"14px"} color="rgb(107, 107, 107)">State  </Heading><Input type={"Text"} width={["300px","400px"]}  placeholder="state" />
    </Box>
    
   <Divider/>


<Box marginTop={"10px"} display={"flex"} justifyContent={"space-between"}>
<Heading fontSize={"18px"}>Total Price</Heading>
<Heading fontSize={"18px"}>{totalprice}</Heading>
</Box>
<Box >
  <Payment></Payment>
  
</Box>

</Box>


  </Box>
  <CultStoreFooter></CultStoreFooter>
    </>
 
    
)
}