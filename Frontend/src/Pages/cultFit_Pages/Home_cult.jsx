import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Hide,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
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
const Home_cult = () => {
  return (
    <>
      <Box>
        <Box pos="relative">
          <Box opacity=".8">
            <video
              autoPlay
              loop
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
            />
          </Box>

          <Flex
          flexDir='column'
            pos="absolute"
            top="25%"
            left="40%"
            border="1px solid red"
            m="auto"
          >
            <Flex >
              <Box>
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
                  alt=""
                />
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
                  alt=""
                />
              </Box>

              <Box>
                <Img
                  w="20vw"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
                  alt=""
                />
              </Box>

              <Box>
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
                  alt=""
                />
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
                  alt=""
                />
              </Box>
            </Flex>

            <Grid
              border="1px solid white"
              templateColumns={{
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
              }}
              // boxSize="100px"
            >
              {data_passes_fitness.map((ele) => (
                <PassBoxElite ele={ele} />
              ))}
            </Grid>
          </Flex>
        </Box>

        {/* motion Boxs********************** */}
        <Box textAlign="center" border="1px solid red" p="20">
          <motion.Box
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{}}
          >
            <Flex
              pos="sticky"
              top="0"
              objectFit="cover"
              justifyContent="space-between"
              onAbort={{ scale: "0" }}
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
          </motion.Box>

          <Text fontSize="40px">One membership for all your fitness needs</Text>

          <motion.Box animate={{}}>
            <Flex objectFit="cover" justifyContent="space-between">
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
          </motion.Box>
        </Box>

        {/* motion Boxs2********************** */}

        <Box textAlign="center" p="20" m="auto">
          <Text pos="sticky" top="20%" fontSize="60px" fontWeight="bold">
            Fun, trainer led <br /> group classes
          </Text>
          <motion.Box
            border="10px solid green"
            pos="sticky"
            top="20%"
            zIndex="-1"
            transition={{ velocity: "0.7" }}
          >
            <Flex objectFit="cover" justifyContent="center">
              <Img
                boxSize="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
              ></Img>

              <Img
                boxSize="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
              ></Img>

              <Img
                boxSize="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
              ></Img>

              <Img
                boxSize="21%"
                mt="50px"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
              ></Img>
            </Flex>
            {/* </motion.Box>



<motion.Box  animate={{}}> */}
            <Flex objectFit="cover" justifyContent="center">
              <Img
                boxSize="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
                alt=""
              />
              <Img
                boxSize="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
                alt=""
              />
              <Img
                boxSize="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png"
                alt=""
              />
              <Img
                boxSize="21%"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-8.png"
                alt=""
              />
            </Flex>
          </motion.Box>
        </Box>

        {/* motion Boxs end...............********************** */}

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
          >
            <Box>
              <Text fontSize="2em">Download the most loved fitness app</Text>
              <p>Start your fitness journey with us. Join the Cult!</p>
            </Box>

            <Box mt="10">
              <Img
                py="3"
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
