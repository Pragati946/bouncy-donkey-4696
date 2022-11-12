import { Box,Button,Divider,Heading,HStack,Image,Input,ListItem,Stack,Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import {useDispatch, useSelector}  from "react-redux"
import {  useParams } from "react-router-dom"
import { getProductDetail } from "../../Redux/Product_Details/ProductDetails.actions";
import Cart from "./Cart";
import {CartAdd} from "../../Redux/cart/Cart.actiontypes";

export default function ProductDetails(){
    const {id,category}=useParams()
  const productdetail=useSelector(store=>store.productdetail.ProductDetail)
    const cartData=useSelector(store=>store.cart)
    const dispatch=useDispatch();
   
    useEffect(()=>{
    dispatch(getProductDetail(id,category))
    },[])
   
  return(
    
    <Box>
      <Stack   direction={["column","row"]}>
        <Box marginRight={"10px"}>
        <Box display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)"]} gap={"10px"}>
          <Box >
<Image width={"550px"} height="783px"  src={productdetail.image}></Image>
          </Box>
          <Box >
<Image width={"550px"} height="783px"  src={productdetail.image}></Image>
          </Box>
          <Box >
<Image width={"550px"} height="783px"  src={productdetail.image}></Image>
          </Box>
          <Box >
<Image width={"550px"} height="783px"  src={productdetail.image}></Image>
          </Box>
      </Box>
        </Box>
        
      
        <Box  width={["400px","600px"]} height="2524px">
    <Text fontSize={"14px"}>CULTSPORT</Text>
      <VStack align={"left"} spacing="15px"> 
      
  <Heading fontSize={"30px"}>{productdetail.title}</Heading>
  <HStack> 
  <Heading color="rgb(241, 49, 113)" fontSize={"22px"}>{productdetail.price1} <Text as='del' color="rgb(74, 74, 74)">{productdetail.price2}</Text></Heading>
  <Box bgColor={"rgb(245, 166, 35)"} color="white">{productdetail.off}</Box>
  </HStack>
  <Text fontSize={"14px"} color={"rgb(142, 138, 138)"}>Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Flomo. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must have for the everyday athlete!</Text>
  <Box>
  <HStack fontSize={"13px"}>
  <Text>Choose Size</Text>
  <Text color={"rgb(240, 74, 126)"}>(Size Guide)</Text>
  </HStack>
  </Box>
  <Box >
  <HStack spacing={8}>
  <Box>UK4</Box>
  <Box>UK5</Box> 
  <Box>UK6</Box>
  <Box>UK7</Box>
  </HStack>
  </Box>
  <Box >
  <Button onClick={()=>{dispatch(CartAdd(productdetail))}}  borderRadius={"100px"} color={"white"} bgColor={"#ff385a"}>Add to Cart</Button>
  {cartData.length>0?<Cart></Cart>:<Button  borderRadius={"100px"} marginLeft={"10px"} color={"white"} bgColor={"#ff385a"}>Buy Now</Button>}
  
  </Box>
  <Box>
  <VStack spacing={"3"} align="left">
  <Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>PRODUCT DETAILS</Heading>
  
  <UnorderedList  color={"rgb(74, 74, 74)"} fontSize="14px">
  <ListItem marginLeft={"40px"}>Colour: Black</ListItem>
  <ListItem marginLeft={"40px"}>Consectetur adipiscing elit</ListItem>
  <ListItem marginLeft={"40px"}>Integer molestie lorem at massa</ListItem>
  <ListItem marginLeft={"40px"}>Facilisis in pretium nisl aliquet</ListItem>
  </UnorderedList>
  <Divider margin={"20px"} height={"10px"} orientation='horizontal' />
  <Box width={'380px'} fontSize={"12px"} border="1px solid blue" borderLeftRadius={"5px"} height="42px">
  <Input className="no-outline"  placeholder="Enter Your Pin" width={'300px'} height="42px"/>
  <Button  color={"red"} bgColor={"white"} disabled>Check</Button>
  </Box>

<UnorderedList   color={"rgb(74, 74, 74)"} fontSize="14px">
  <ListItem marginLeft={"40px"}>Colour: Black</ListItem>
  <ListItem marginLeft={"40px"}>Consectetur adipiscing elit</ListItem>
  <ListItem marginLeft={"40px"}>Integer molestie lorem at massa</ListItem>
  <ListItem marginLeft={"40px"} fontWeight={"bold"}>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
<Divider margin={"20px"} height={"10px"} orientation='horizontal' />
<Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>Specifications</Heading>
<Text>Country of Origin: China</Text>
</VStack>

</Box>
</VStack>
</Box>
</Stack>
</Box>
    )
}