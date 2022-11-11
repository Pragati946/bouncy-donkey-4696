import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  Heading,
  Hide,
  Highlight,
  Image,
  Img,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { MdHighlightOff } from "react-icons/md";
import { PassBoxElite } from "../../Components/CultFit/Fitness_cultfitPage/CommonExports_Raj/components_cultfit";
import Footer2_cultfit from "../../Components/CultFit/Footer/Footer1_cultfit/Footer2_cultfit";
import Footer1_cultfit from "../../Components/CultFit/Footer/Footer1_cultfit/Footer1_cultfit";
import FitnessFAQs from "./FitnessFAQs";
import Carousel from "react-bootstrap/Carousel";
import {AiOutlineCheckCircle, } from 'react-icons/ai'
import {BsQuestionCircleFill, } from 'react-icons/bs'
const Fitness_Page = () => {
  return (
    <>
      <Box>
        {/* top section */}
        <Box m="auto" pos="initial">
          <Img
            border="1px solid red"
            shadow="inner(black)"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/f7d43252-4f8a-4113-94b1-2dd97fbcca16.png"
            zIndex="-1"
          />
          {/* <Box pos="absolute" top="25%" left="25%" border="1px solid white">
            <Button bg="white" variant="solid">
              <Text
                fontWeight="bold"
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                TRY FOR FREE
              </Text>{" "}
            </Button>
            <Grid templateColumns="repeat(3,1fr)">
              {data_passes_fitness.map((ele) => (
                <PassBoxElite ele={ele} />
              ))}
            </Grid>
          </Box> */}
        </Box>
      </Box>
      <Box m="auto" textAlign="center" bg="black" color="white">
        {/* <AllCrousel_cultfit props={rapid_crousel}/> */}
        {/* At work section  */}

        <Box>
          {/* <Heading>AT HOME</Heading>
          <Text>Live group workouts with calorie tracking</Text> */}
          {/* '"Crousers' */}
      
        </Box>
        
        <Carousel show={3.5} slide={1} swiping={true}>
    <Highlight color="#2d66c3">We love Web 🌐</Highlight>
    <Highlight color="#f44336">We love Developers 👩🏻‍</Highlight>
    <a target="_blank" href="https://github.com/trendyol/">
        <Highlight color="#d53f8c">This is our github</Highlight>
    </a>
    <a target="_blank" href="https://trendyol.com/">
        <Highlight color="#f27a1a">This is our website</Highlight>
    </a>
</Carousel>
        {/* table section++++++++++++++++++++++ */}
        <Hide below="md">
          <Box w="75%" m="auto">
            <Heading>Choose your cultpass</Heading>
            <Text>3 flexible plans to suit your fitness needs</Text>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th></Th>
                    {data_passes_fitness.map((ele) => (
                      <Th>
                        <Image src={ele.image} w="50%" h="50%" />
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th>ELITE Gyms & At Centre Group Classes </Th>
                    <Td border="1px solid grey">
                      {" "}
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey"></Td>
                    <Td border="1px solid grey">
                      {" "}
                      <MdHighlightOff />{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>PRO GYMS</Th>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <MdHighlightOff />
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>Smart workout plan</Th>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <MdHighlightOff />
                    </Td>
                  </Tr>
                </Tbody>

                <Tfoot>
                  <Tr>
                    <Th>At home workouts</Th>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                    <Td border="1px solid grey">
                      <CheckCircleIcon color="blue.300" /> <br /> Ultimate
                    </Td>
                  </Tr>
                  <Tr>
                    <Th></Th>
                    <Td>
                      Starting at ₹1178/ month <br />{" "}
                      <Button
                        fontWeight="bold"
                        bgGradient="linear(to-l, #7928CA, #FF0080)"
                      >
                        BUY NOW
                      </Button>
                    </Td>

                    <Td border="1px solid grey">
                      Starting at ₹714/ month <br />{" "}
                      <Button bg="white" variant="solid">
                        <Text
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l, #7928CA, #FF0080)"
                        >
                          BUY NOW
                        </Text>{" "}
                      </Button>
                    </Td>

                    <Td>
                      Starting at ₹115/ month <br />{" "}
                      <Button bg="white" variant="solid">
                        <Text
                          fontWeight="bold"
                          bgClip="text"
                          bgGradient="linear(to-l, #7928CA, #FF0080)"
                        >
                          BUY NOW
                        </Text>{" "}
                      </Button>
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Hide>

        {/* table section++++++++++++++++++++++ */}
        {/* FREE TRailS++++++++++++++++++++++ */}
        <Box>
          <Text fontSize="5xl" fontWeight='bold'>FREE TRAILS</Text>
          <Grid
            templateColumns={{ lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }}
            w="60%"
            m="auto"
            alignItems="center"
          >
            <Image
              maxH="90%"
              _hover={{ maxH: "100%", transition: "all 0.5s ease-out" }}
              boxShadow="rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png"
            />

            <Image
              maxH="100%"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"
            />

            <Image
              maxH="90%"
              ml="10%"
              _hover={{
                maxH: "100%",
                ml: "0",
                transition: "all 0.5s ease-out",
              }}
              boxShadow="rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png"
            />
          </Grid>
        </Box>


        <Box display='flex' marginLeft='4%' marginBottom='10%' marginTop='10%' >
        <Box textAlign='start' marginLeft='20px'>
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_294,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png" h='20px'  ></Image>
       <Text fontWeight='bold' fontSize='4xl'>Unlimited access to <br /> everything in your city</Text>
       <Text fontSize='2xl' fontWeight='semibold' lineHeight='10' >Unlimited access to</Text>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold'  color='#adafb2' > At-center group classes</Text>
       </Box>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold' color='#adafb2' > All ELITE & PRO gyms</Text>
       </Box>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold'  color='#adafb2' > At-home live workouts</Text>
       </Box>
       <Text fontSize='20px' fontWeight='semibold' lineHeight='10' color='#adafb2' >Starting at ₹1178 / month</Text>
        <Button marginRight='10px' _hover={{color:'black'}}  bgColor='#23282f' >TRY FOR FREE</Button>
        <Button _hover={{color:'black'}} width='30%' bgColor='#ffffff' color='#f06055' >BUY NOW</Button>
       <Box display='flex' marginTop='15px'>
         <BsQuestionCircleFill color="#85583d" size='24px'  />
        <Text marginLeft='10px'  >SALE ON NOW</Text>
       </Box>
       </Box>
      <Box width='50%' marginLeft='15%' >
       <Carousel  prevIcon='' nextIcon=''  >
          <Carousel.Item  interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
              alt=" Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
              className="d-block w-100"
              alt=" One"
            />
          </Carousel.Item>
        </Carousel>
       </Box>
      
      </Box>


      
      <Box display='flex' marginLeft='4%' marginBottom='10%' marginTop='10%' >
      <Box width='50%' >
       <Carousel  prevIcon='' nextIcon=''  >
          <Carousel.Item  interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
              alt=" Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
              className="d-block w-100"
              alt=" One"
            />
          </Carousel.Item>
        </Carousel>
       </Box>
       <Box textAlign='start' marginLeft='20px'>
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_265,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro.png" h='20px'  ></Image>
       <Text fontWeight='bold' fontSize='4xl'>Unlimited access to PRO <br /> gyms in your city</Text>
       <Text fontSize='2xl' fontWeight='semibold' lineHeight='10' >Unlimited access to</Text>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold'  color='#adafb2' > All PRO gyms</Text>
       </Box>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold' color='#adafb2' > At-home live workouts</Text>
       </Box>
       <Box display='flex' margin='2' >
       <AiOutlineCheckCircle color="#85583d" size='24px'  />
       <Text marginLeft='5px' fontSize='18px' fontWeight='semibold'  color='#adafb2' > 2 Sessions/month at ELITE gyms & group classes</Text>
       </Box>
       <Text fontSize='20px' fontWeight='semibold' lineHeight='10' color='#adafb2' >Starting at ₹714 / month</Text>
        <Button marginRight='10px' _hover={{color:'black'}}  bgColor='#23282f' >TRY FOR FREE</Button>
        <Button _hover={{color:'black'}} width='30%' bgColor='#ffffff' color='#f06055' >BUY NOW</Button>
       <Box display='flex' marginTop='15px'>
         <BsQuestionCircleFill color="#85583d" size='24px'  />
        <Text marginLeft='10px'  >SALE ON NOW</Text>
       </Box>
       </Box>
      </Box>

     
        

        <Box  marginLeft='18%' marginBottom='10%' width='1000%' >
        <video style={{borderRadius:'20px',border:'1px solid red', height:'400px'}} autoPlay loop muted >
          <source type="video/mp4" src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4" ></source>
        </video>

        </Box>
      
      <Box margin='6%' marginBottom='10' marginTop='10' >
        <Image src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/a5077452-0ba1-469f-a9ab-3eb6429de7c2.png' ></Image>
      </Box>

        <Box
          bgImage="url('https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/e33780ba-8a13-4254-b2f1-2b50be6273e0.svg')"
          backgroundSize="cover"
          opacity="0.7"
          h="700px"
          border="1px solid black"
          paddingTop='12%'
          paddingLeft='16%'
          paddingRight='15%'
        >
          <Box  display='flex'  justifyContent='space-evenly'  >
            <Box marginRight='20%'  >
              <Text fontSize='160%' >FITIFY COMMUNITY</Text>
              <Text marginTop='15%' marginBottom='15%'  fontSize='4xl' color='white' fontWeight='bold' >Be a part of the <br /> cult community</Text>
              <Text marginBottom='10%' fontSize='2xl' lineHeight='30px'  >Join the <br /> FaceBook <br /> community <br /> today</Text>
              <Link fontSize='2xl' fontWeight='bolder' color='blue' >JOIN NOW </Link>
            </Box>
            <Image height='300px' width='400px' src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/246641e8-00d7-42f7-ac92-3207665e35f7.svg" ></Image>
          </Box>
        </Box>
      </Box>
    <FitnessFAQs/>
      <Footer1_cultfit/>
      <Footer2_cultfit/>
    </>
  );
};

export default Fitness_Page;

export const data_passes_fitness = [
  {
    text1: "cultpass",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png",
    text2: "Starting at ₹1083 / month",
  },
  {
    text1: "cultpass",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png",
    text2: "Starting at ₹857 / month",
  },
  {
    text1: "cultpass",
    image:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png",
    text2: "Starting at ₹115 / month",
  },
];

const rapid_crousel = [
  {
    bgCol:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/840392e5-7a2c-4f23-9d7c-14f9be6c77f3.jpg",
    bgColor: "#718096",
    text: "FREE ₹1500 FLIPKART VOUTURE + EXTRA ₹500 OFF + 3 MONTHS EXTENSION ",
    text2: "on FITIFY ELITE",
    time: "",
  },
  {
    bgCol:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/ef47bcb2-c25c-4753-8880-fa588910c092.jpg",
    bgColor: "#718096",
    text: "FREE ₹750 FLIPKART VOUTURE + EXTRA ₹500 OFF + 2.5 MONTHS EXTENSION ",
    text2: "on FITIFY PRO",
    time: "",
  },
  {
    bgCol:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/dd4fa05e-d599-4a1f-b23f-5f65fb7ca2b7.jpg",
    bgColor: "#285E61",
    text: "UPTO 4 MONTHS EXTENSION FREE",
    text2: "on FITIFY LIVE",
    time: "",
  },
  {
    bgCol:
      "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/ef47bcb2-c25c-4753-8880-fa588910c092.jpg",
    bgColor: "#702459",
    text: "UPTO ₹500 OFF + 3 MONTHS EXTENSION | ENDS IN",
    text2: "on FITIFY TRANSFORM",
    time: "",
  },
];
