import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Footer1_cultfit from "../Footer/Footer1_cultfit";
import { Navbarmind } from "./Navbarmind";
import { Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { border } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import CultNavbar from "../CultNavbar/CultNavbar";
import { cultNavbar } from "../../../Redux/NavBarToggle/actiontypes";
import { useDispatch } from "react-redux";

function Mind() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(cultNavbar())
  },[])
  let expert = [
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/84248218-f8c0-44d8-b2d6-be415b742b9a.png",
      Head: "Therapy",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/9ce1d9a2-d3c6-4a19-91bd-028d52f58c84.png",
      Head: "Couple Therapy",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/5e9f8ee5-83dd-4dca-beca-61885323ce3c.png",
      Head: "COVID Stress",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/84248218-f8c0-44d8-b2d6-be415b742b9a.png",
      Head: "Better Sleep",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/dcd1728e-d7dc-4952-b552-b1b1c97e9ac1.png",
      Head: "Rise to Confidence",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/18a8d3b2-d262-4f78-908b-79a55a40ef68.png",
      Head: "Thriv at Work",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/1a2d8f7e-2c24-4cbf-88be-e2cf266dfa23.png",
      Head: "Healthy Relationships",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
    {
      Img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_580,c_fit/dpr_2/image/vm/aebc57c2-ee58-41f7-a854-00fb5c5d55f9.png",
      Head: "Transform Your Thinking",
      Desc: "Experts who help solve emotional problems ₹1300",
      time: "⏰ 50 Mins Session",
      price: "₹1300",
    },
  ];

  return (
    <div>
      <Box mb='8'>

      <Navbarmind  />
      </Box>
      <Box
        height="70%"
        margin="center"
        alignSelf="auto"
        marginLeft="13%"
        marginRight="13%"
      >
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f87f914f-7a53-4a80-b9b6-d85d80fae1cb.png"></Image>
      </Box>

      <Box marginLeft="15%" marginRight="15%" marginTop="2%" marginBottom="5%">
        <Text fontWeight="bold" fontSize="130%">
          EXPERTS TO HELP YOU
        </Text>
        <Grid
          marginBottom="5%"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          {expert.map((e) => {
            return (
              <GridItem  _hover={{ boxShadow: "2px 3px 10px rgb(0 0 0 / 0.2)" }}>
                <Box borderRadius="5"
                 pos='relative' 
                    bgImage={e.Img}
                    bgRepeat="no-repeat"
                    bgSize="cover"
                  
                 >
                  <Box                  
                  borderRadius="5px"
                    p="3%"
                  >
                    <Text
                     
                      fontWeight="bold"
                      fontSize={{sm:"15px",md:"18px",lg:"20px"}}
                    >
                      {e.Head}
                    </Text>
                   
                    <Text
                      fontWeight="semibold"                    
                      p="2%"
                      fontSize={{sm:"10px",md:"13px",lg:"16px"}}
                    >
                      {e.Desc}
                    </Text>
                    <Text fontWeight="semibold" p="2%">
                      {e.time}
                    </Text>
                    <Text fontWeight="bold" p="3%">
                      {e.price}
                    </Text>
                  </Box>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Box marginLeft="12%" marginRight="12%">
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/8d058e84-f098-4129-b107-dc81c19af2f1.png"></Image>
      </Box>

      <Box marginLeft="12%" marginRight="12%">
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/7f7af73c-3ee3-46c1-9129-0df18dbb02ac.png"></Image>
      </Box>




      <Box
        bg="#171a26"
        w="100%"
        paddingLeft="15%"
        paddingRight="15%"
        paddingBottom="50px"
      >


        <Box
          paddingTop="5%"
          display="flex"
          textAlign="center"
          justifyContent="space-between"
        >
          <Text color="white" fontWeight="bold" fontSize="240%">
            FAQ'S
          </Text>
          <Text color="white" marginTop="15px">
            See All
          </Text>
        </Box>
        <Text paddingBottom="4%" color="#6a6a6a" marginTop="-10px">
          7 QUESTIONS
        </Text>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  margin="10px"
                  color="#cccfd1"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="150%"
                >
                  Is therapy for me?
                </Box>
                <AccordionIcon color="#cccfd1" boxSize="32px" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              marginLeft="2%"
              marginRight="40%"
              color="#cccfd1"
              fontWeight="semibold"
              fontSize="110%"
              pb={4}
            >
              Whether you are experiencing symptoms that come in the way of
              daily living or want to explore issues experienced in the past or
              are keen on enhancing your wellbeing and growth in life - therapy
              is suitable for all.{" "}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  margin="10px"
                  color="#cccfd1"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="150%"
                >
                  What should I expect during my first therapy session?
                </Box>
                <AccordionIcon color="#cccfd1" boxSize="32px" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              marginLeft="2%"
              marginRight="40%"
              color="#cccfd1"
              fontWeight="semibold"
              fontSize="110%"
              pb={4}
            >
              Your therapist will focus on getting to know you better through
              the first session. Together, the two of you will identify goals
              for follow up sessions. Your therapist may also share a few
              exercises for you to practice, if relevant.{" "}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  margin="10px"
                  color="#cccfd1"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="150%"
                >
                  What is the difference between a Therapist and a Psychiatrist?
                </Box>
                <AccordionIcon color="#cccfd1" boxSize="32px" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              marginLeft="2%"
              marginRight="40%"
              color="#cccfd1"
              fontWeight="semibold"
              fontSize="110%"
              pb={4}
            >
              Therapists go deep into our problems with us. They help us
              understand ourselves better and plan for recovery without using
              medicines. Psychiatrists diagnose and treat chronic mental health
              conditions and may use medicines.{" "}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  margin="10px"
                  color="#cccfd1"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="150%"
                >
                  What does a Therapy pack offer?
                </Box>
                <AccordionIcon color="#cccfd1" boxSize="32px" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              marginLeft="2%"
              marginRight="40%"
              color="#cccfd1"
              fontWeight="semibold"
              fontSize="110%"
              pb={4}
            >
              A Therapy pack helps with continuity of your wellness journey,
              without having to bother about booking sessions one at a time.
              Your Therapist will recommend the number of sessions that you
              might need to address your challenges. We recommend you buy a pack
              only after a discussion with the therapist.{" "}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  margin="10px"
                  color="#cccfd1"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                  fontSize="150%"
                >
                  How to book a 1 on 1 Therapy session?
                </Box>
                <AccordionIcon color="#cccfd1" boxSize="32px" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              marginLeft="2%"
              marginRight="40%"
              color="#cccfd1"
              fontWeight="semibold"
              fontSize="110%"
              pb={4}
            >
              Here’s how you can book a therapy session from the cure.fit app:
              Log into the cure.fit app From the bottom of the To-Do page, pick
              mind.fit Pick 1 on 1 therapy Pick a preferred center and time slot
              Make a payment That’s all!{" "}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

      </Box>
      <Footer1_cultfit />
    </div>
  );
}

export default Mind;
