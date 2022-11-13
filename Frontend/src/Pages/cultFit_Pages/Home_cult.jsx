import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Hide,
  Img,
  ListItem,
  Show,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Slider from "../../Components/CultFit/HomePage_cultfit/Slider";
import Footer1_cultfit from "../../Components/CultFit/Footer/Footer1_cultfit";
import Footer2_cultfit from "../../Components/CultFit/Footer/Footer2_cultfit";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  cards_premium,
  PassBoxElite,
  Home_cult_grid4_boxes,
} from "../../Components/CultFit/Fitness_cultfitPage/CommonExports_Raj/components_cultfit";
import { data_passes_fitness } from "./FitnessPage_cultfit";
import CultNavbar from "../../Components/CultFit/CultNavbar/CultNavbar";
const Home_cult = () => {
  const { scrollProgress } = useScroll();

  return (
    <>

    

    
      <Box bg='blackAlpha.800'>
        <Box pos="relative" m='auto' >

          <Box opacity=".8">
            <video autoPlay loop>
              <source
                src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
                type="video/mp4"
              />
            </video>
          </Box>

          <Flex
            flexDir="column"
            alignItems="center"
            pos="absolute"
            top="15%"
            left="20%"
            m="auto"
            gap="10"
          >
            <Box w={{ md: "250px", lg: "auto" }}>
              <Img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
                alt=""
              />
            </Box>

            <Show above="sm">
              <Grid
                templateColumns={{
                  md: "repeat(3,1fr)",
                  lg: "repeat(3,1fr)",
                  xl: "repeat(3,1fr)",
                }}
                w="60%"
                m="auto"
                justifyContent="center"
                scale="0.5"
              >
                {data_passes_fitness.map((ele) => (
                  <Box w={{ md: "200px", lg: "200px", xl: "250px" }}>
                    <PassBoxElite ele={ele} />
                  </Box>
                ))}
              </Grid>
            </Show>
          </Flex>
        </Box>

        {/* motion Boxs******************************************************* */}
        <Show above="sm">
          <Box textAlign="center" color="whiteAlpha.300" p="20">
            <Box
              as={motion.div}
              pos="sticky"
              top="0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{}}
              zIndex="-3"
            >
              <Flex
                // objectFit="cover"
                justifyContent="space-around"
              >
                <Img
                  boxSize="30%"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_1.png"
                ></Img>
                <Img
                  boxSize="30%"
                  mt="50px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_2.png"
                ></Img>
              </Flex>
            </Box>
            <Box zIndex="20">
              <Text
                fontSize={{
                  sm: "40px",
                  md: "40px",
                  lg: "40px",
                  "2xl": "3.6rem",
                }}
                fontWeight="bold"
              >
                One membership for all your fitness needs
              </Text>
            </Box>

            <Flex
              as="motion.Box"
              objectFit="cover"
              zIndex="-3"
              justifyContent="space-between"
            >
              <Img
                boxSize="25%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_3.png"
                alt=""
              />
              <Img
                boxSize="30%"
                mt="150px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_4.png"
                alt=""
              />
              <Img
                boxSize="25%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_5.png"
                alt=""
              />
            </Flex>
          </Box>
        </Show>

        {/* motion Boxs2*************************************************************************************************** */}

        <Box
          as={motion.div}
          textAlign="center"
          m="auto"
          transition={{ velocity: "0.6" }}
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          exit={{ tranform: "scale(0)" }}
        >
          <Text
            fontSize={{
              base: "1.4em",
              md: "2.2rem",
              lg: "2.4rem",
              "2xl": "3.6rem",
            }}
            pos="sticky"
            top="20%"
            zIndex="20"
            color="whiteAlpha.600"
            fontWeight="bold"
            textDecor="wavy"
          >
            Fun, trainer led group classes
          </Text>
          <Box
            w="100%"
            py="3"
            // as={motion.div}
            // animate={{transform:'scale(1)',opacity:1,z:0 }}
            // exit={{scale:0,opacity:0}}
            // transition={{z:-20 }}
            zIndex="-3"
            sm={{ border: "20px solid red" }}
          >
            <Flex
              pos="sticky"
              top="0"
              objectFit="cover"
              zIndex="-10"
              justifyContent="center"
            >
              <Box
                // _hover={{border:'1px solid red'}}
                // _hover={{w:'22%',transition:'all 0.5s ease-out'}}
                w="21%"
                mt="50px"
              >
                <Img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png" />
              </Box>

              <Img
                w="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
              />

              <Img
                w="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
              />

              <Img
                w="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
              />
            </Flex>

            <Flex objectFit="cover" justifyContent="center">
              <Img
                w="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
                alt=""
              />
              <Img
                w="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                alt=""
              />
              <Img
                w="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png"
                alt=""
              />
              <Img
                w="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-8.png"
                alt=""
              />
            </Flex>
          </Box>
        </Box>

        {/* motion Boxs end...............***************************************************************** */}

        {/* Static Boxs    ...............**************************** */}
        {/* CultFit Pass Boxs    ...............********************** */}

        <Box py="10vh" bg="black">
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(1,1fr)",
              lg: "repeat(3,1fr)",
              xl: "repeat(3,1fr)",
            }}
            color="revert"
            m="auto"
            w="60%"
            gap="3"
            justifyContent="space-evenly"
          >
            {cards_premium.map((el) => (
              <Box border="2px solid grey" borderRadius="12px">
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    sm: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(1,1fr)",
                    xl: "repeat(1,1fr)",
                  }}
                >
                  <Box>
                    <Img
                      w="300px"
                      src={el.img_cards_premium}
                      m="22px 0"
                      alt="live-pass"
                      className="homePage__cultpass-poster"
                    />
                  </Box>

                  <Box className="homePage__cultpass-type-one_textBox-title">
                    <Text
                      fontSize="25px"
                      fontWeight="700"
                      color="grey"
                      my="22px"
                    >
                      Unlimited access to
                    </Text>
                    <UnorderedList
                      pl="25px"
                      color="rgb(145, 144, 144)"
                      fontWeight="bold"
                      lineHeight="2"
                      my="22px"
                    >
                      <ListItem>{el.cont1_cards_premiumcards}</ListItem>
                      <ListItem>{el.cont2_cards_premiumcards}</ListItem>
                      <ListItem>{el.cont3_cards_premiumcards}</ListItem>
                    </UnorderedList>

                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      my="30px"
                      px="3"
                    >
                      <Button size="sm">TRY FOR FREE</Button>
                      <Button size="sm">LEARN MORE</Button>
                    </Flex>
                  </Box>
                </Grid>
              </Box>
            ))}
          </Grid>

          {/* grid boxes Workout Gear */}

          <Grid
            width={{ base: "95%", sm: "95%", md: "80%", lg: "80%", xl: "80%" }}
            p="20"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(2,1fr)",
              xl: "repeat(2,1fr)",
            }}
            m="auto"
            gap="10"
            justifyContent="center"
          >
            {Home_cult_grid4_boxes.map((ele) => (
              <Box
                m="auto"
                w="100%"
                h="50vh"
                borderRadius="12px"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                color="white"
                backgroundImage={ele.img_url_features_backgrr}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  py="2"
                  px="4"
                >
                  <Text fontSize="30px" fontWeight="900">
                    {ele.title_features}
                  </Text>
                  <BsArrowRightCircle></BsArrowRightCircle>
                </Flex>
                <Text px="4"> {ele.sub_Title_features} </Text>
              </Box>
            ))}
          </Grid>

          <Slider />

          <Box
            borderLeft="5px dashed grey"
            bgImage="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1200,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/download-app/download-app-variant-2.png"
            color="whiteAlpha.500"
            borderRadius="16"
            p="16"
            w="70%"
            m="auto"
            mt="4vw"
            sm={{
              p: "2",
              w: "100%",
              m: "auto",
              mt: "4vw",
            }}
          >
            <Box>
              <Text fontSize={{ sm: "1.4em", md: "2em" }}>
                Download the most loved fitness app
              </Text>
              <p>Start your fitness journey with us. Join the Cult!</p>
            </Box>

            <Box mt="10" sm={{ width: "60%", transform: "scale(.6)" }}>
              <Img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_2.98,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                alt=""
              />
              <Img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_3.31,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                alt=""
              />
            </Box>
          </Box>

          <Box
            p="20vw"
            opacity="0.7"
            bgImage="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1000,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/we_are_cult_new.svg"
            textAlign="left"
            color="whiteAlpha.800"
          ></Box>
        </Box>

        <Footer1_cultfit />
        <Footer2_cultfit />
      </Box>
      

  </>
  );
};

export default Home_cult;
