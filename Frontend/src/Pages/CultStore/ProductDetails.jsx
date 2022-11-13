import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../Redux/Product_Details/ProductDetails.actions";
import Cart from "./Cart";
import { CartAdd } from "../../Redux/cart/Cart.actiontypes";
import CultStoreNavbar from "../../Components/CultStore/CultStoreNavbar/CultStoreNavbar";
import CultStoreFooter from "../../Components/CultStore/CultStoreFooter/CultStoreFooter";

export default function ProductDetails() {
  const { id, category } = useParams();
  const productdetail = useSelector(
    (store) => store.productdetail.ProductDetail
  );
  const cartData = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetail(id, category));
  }, []);

  return (
    <>
      <CultStoreNavbar />
      <br />
      <Grid
        // direction={["column", "row"]}
        w={{ base: "96%", sm: "95%", md: "80%", lg: "80%" }}
        m="auto"
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "1fr 2fr",
        }}
        gap="6"
      >
        <Box marginRight={"10px"} overflow="hidden">
          <Box>
            <Image
              w="full"
              src={productdetail.image}
              _hover={{
                transform: "scale(1.1)",
                transformOrigin: "50% 50%",
                cursor: "pointer",
                opacity: ".9",
              }}
              transition="transform .5s"
            />
          </Box>
        </Box>

        <Box>
          <Text fontSize={"14px"}>CULTSPORT</Text>
          <VStack align={"left"} spacing="15px">
            <Heading fontSize={"30px"}>{productdetail.title}</Heading>
            <HStack>
              <Heading color="rgb(241, 49, 113)" fontSize={"22px"}>
                {productdetail.price1}{" "}
                <Text as="del" color="rgb(74, 74, 74)">
                  {productdetail.price2}
                </Text>
              </Heading>
              <Box bgColor={"rgb(245, 166, 35)"} color="white">
                {productdetail.off}
              </Box>
            </HStack>
            <Text fontSize={"14px"} color={"rgb(142, 138, 138)"}>
              Need something for your daily runs or a pair that provides comfort
              all day long? Look no further. Introducing the Cultsport Flomo.
              With a German engineered insole, these runners give you the
              cushioning and rebound you need. An 8mm heel to toe drop, and an
              overall combination of durability and support these shoes make
              every run a smooth one. A must have for the everyday athlete!
            </Text>
            <Box>
              <HStack fontSize={"13px"}>
                <Text>Choose Size</Text>
                <Text color={"rgb(240, 74, 126)"}>(Size Guide)</Text>
              </HStack>
            </Box>
            <Box>
              <HStack spacing={8}>
                <Box>UK4</Box>
                <Box>UK5</Box>
                <Box>UK6</Box>
                <Box>UK7</Box>
              </HStack>
            </Box>
            <Box>
              <Button
                _hover={{ backgroundColor: "ff385a" }}
                onClick={() => {
                  dispatch(CartAdd(productdetail));
                }}
                padding={"20px"}
                borderRadius={"100px"}
                color={"white"}
                bgColor={"#ff385a"}
                w="150px"
              >
                Add to Cart
              </Button>
              {cartData.length > 0 ? (
                <Cart></Cart>
              ) : (
                <Button
                  borderRadius={"100px"}
                  marginLeft={"10px"}
                  color={"white"}
                  _hover={{ backgroundColor: "ff385a" }}
                  bgColor={"#ff385a"}
                  w="150px"
                >
                  Buy Now
                </Button>
              )}
            </Box>
            <Box>
              <VStack spacing={"3"} align="left">
                <Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>
                  PRODUCT DETAILS
                </Heading>

                <UnorderedList color={"rgb(74, 74, 74)"} fontSize="14px">
                  <ListItem marginLeft={"40px"}>Colour: Black</ListItem>
                  <ListItem marginLeft={"40px"}>
                    Consectetur adipiscing elit
                  </ListItem>
                  <ListItem marginLeft={"40px"}>
                    Integer molestie lorem at massa
                  </ListItem>
                  <ListItem marginLeft={"40px"}>
                    Facilisis in pretium nisl aliquet
                  </ListItem>
                </UnorderedList>
                <Divider
                  margin={"20px"}
                  height={"10px"}
                  orientation="horizontal"
                />
                <Box
                  width={"380px"}
                  fontSize={"12px"}
                  borderLeftRadius={"5px"}
                  height="42px"
                >
                  <Input
                    placeholder="Enter Your Pin"
                    width={"300px"}
                    height="42px"
                  />
                  <Button color={"red"} bgColor={"white"} disabled>
                    Check
                  </Button>
                </Box>

                <UnorderedList color={"rgb(74, 74, 74)"} fontSize="14px">
                  <ListItem marginLeft={"40px"}>Colour: Black</ListItem>
                  <ListItem marginLeft={"40px"}>
                    Consectetur adipiscing elit
                  </ListItem>
                  <ListItem marginLeft={"40px"}>
                    Integer molestie lorem at massa
                  </ListItem>
                  <ListItem marginLeft={"40px"} fontWeight={"bold"}>
                    Facilisis in pretium nisl aliquet
                  </ListItem>
                </UnorderedList>
                <Divider
                  margin={"20px"}
                  height={"10px"}
                  orientation="horizontal"
                />
                <Heading color={"rgb(74, 74, 74)"} fontSize={"16px"}>
                  Specifications
                </Heading>
                <Text>Country of Origin: China</Text>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Grid>
      <br />
      <br />
      <CultStoreFooter />
    </>
  );
}
