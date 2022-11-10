import { Box,Button,Divider,Heading,HStack,Image,Input,ListItem,Stack,Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import {useDispatch, useSelector}  from "react-redux"
import { useParams } from "react-router-dom"
import { getProductDetail } from "../../Redux/Product_Details/ProductDetails.actions";

export default function ProductDetails(){
    const {id}=useParams()
    const productdetail=useSelector(store=>store.productdetail.ProductDetail)
    const dispatch=useDispatch();
    console.log(productdetail)
    useEffect(()=>{
    dispatch(getProductDetail(id))
    },[])
    return(
    
    <Box>
      <Stack  direction={"row"}>
      <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/ifxQqSatbw9anqJsmG1eo1SA"></Image>
    <Box width={"419px"} height="2524px">
    <Text fontSize={"14px"}>CULTSPORT</Text>
      <VStack align={"left"} spacing="15px"> 
      
    <Heading fontSize={"30px"}>Flomo Women Running Shoe</Heading>
    <HStack>
   
    <Heading color="rgb(241, 49, 113)" fontSize={"22px"}>₹ 3224 <Text as='del' color="rgb(74, 74, 74)">₹ 4299</Text></Heading>
    <Box bgColor={"rgb(245, 166, 35)"} color="white">25% off</Box>
    </HStack>
   
  <Text fontSize={"14px"} color={"rgb(142, 138, 138)"}>Need something for your daily runs or a pair that provides comfort all day long? Look no further. Introducing the Cultsport Flomo. With a German engineered insole, these runners give you the cushioning and rebound you need. An 8mm heel to toe drop, and an overall combination of durability and support these shoes make every run a smooth one. A must have for the everyday athlete!</Text>
  <Box>
    <HStack fontSize={"13px"}>
    <Text>Choose Size</Text>
  <Text color={"rgb(240, 74, 126)"}>(Size Guide)</Text>
    </HStack>
  </Box>
 
  <Box >
    <HStack>
    <Box>UK4</Box>
   <Box>UK5</Box> 
   <Box>UK6</Box>
  <Box>UK7</Box>
    </HStack>
  

  </Box>
  <Box>
    <Button color={"white"} bgColor={"#ff385a"}>Add to Cart</Button>
    <Button  color={"white"} bgColor={"#ff385a"}>Buy Now</Button>
  </Box>
  <Box>

<Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>PRODUCT DETAILS</Heading>
<UnorderedList color={"rgb(74, 74, 74)"} fontSize="14px">
  <ListItem>Colour: Black</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>

<Divider orientation='horizontal' />
<Box><Input  placeholder="Enter Your Pin" width={'300px'} height="44px"/><Button color={"red"} bgColor={"white"}>Check</Button></Box>

<UnorderedList color={"rgb(74, 74, 74)"} fontSize="14px">
  <ListItem>Colour: Black</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem fontWeight={"bold"}>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
<Divider orientation='horizontal' />
<Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>Specifications</Heading>
<Text>Country of Origin: China</Text>
</Box>
      </VStack>
    
</Box>

      </Stack>
        

    </Box>
    )
}