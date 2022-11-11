import React from "react";
import { NavbarCare } from "./NavbarCare";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, border, Box, Container, Divider, Image, Text } from "@chakra-ui/react";
import "./Care.module.css";
import { Grid, GridItem } from "@chakra-ui/react";
import data from "./LabtestData.json";
import Footer1_cultfit from './../Footer/Footer1_cultfit/Footer1_cultfit';

function Care() {
  console.log(data);

let Senierdata = [
  {
    "href": "https://www.cult.fit/care/diagnostic-tests/full-body-checkup",
    "src": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/diagnostics/screening-packs/sr_citizen_adv_m_mag.png",
    "price": "₹ 5999",
    "price_text":"Price",
     "Offer_Price":"Offer Price",
    "discounted_price": "₹ 2990"},
    {
      "href": "https://www.cult.fit/care/diagnostic-tests/full-body-checkup",
      "src": "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/FitCheck_Magazine-02.png",
      "price": "₹ 5999",
      "price_text":"Price",
       "Offer_Price":"Offer Price",
      "discounted_price": "₹ 2990"},
]


  return (
    <div>
      <NavbarCare />
      <Box
        height="70%"
        margin="center"
        alignSelf="auto"
        marginLeft="15%"
        marginRight="15%"
      >
        <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/aa3e1923-35c9-474a-9725-b805692a668b.png"></Image>
        <Carousel  prevIcon='' nextIcon=''  >
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/56ddb91c-6286-490e-99c6-c73dda380f3a.png"
              alt=" Two"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Image
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/f061fddb-e946-4348-91e4-ffe9d69dd18a.png"
              className="d-block w-100"
              alt=" One"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440/dpr_2/image/vm/cb1c1e2e-4b01-4920-a67d-46dd89857ced.png"
              alt=" Two"
            />
          </Carousel.Item>
        </Carousel>
      </Box>
      <Box marginLeft="15%" marginRight="15%" marginTop="2%" marginBottom='5%'>
        <Text marginBottom='0.2%' fontWeight='semibold' fontSize='25'>Lab Tests</Text>
        <p >Assess and monitor your health from the comfort of your home now.</p>
        <Grid templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(5, 1fr)"}} gap={6}>
          {data.map((e) => {
            return (
              <GridItem   _hover={{transition:'all 0.3s ease-in',border:'4px solid transparent'}} w="100%" >
                <Image borderRadius='5px' src={e.src}></Image>
                <Box display='flex' justifyContent='space-between' marginBottom='0px' >
                <Text>{e.price_text}</Text>
                <Text decoration='line-through' color='grey' >{e.price}</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' marginTop='-2px' >
                <Text >{e.Offer_Price}</Text>
                <Text  fontWeight='bold' >{e.discounted_price}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
        <Divider marginTop='30px' marginBottom='30px' bgColor='black' height='0.5px' color='black' lineHeight='20px' />
       
       <Text marginBottom='2.5%' fontWeight='semibold' fontSize='25' >Tests for Senior Citizen</Text>

       <Grid marginBottom='5%' templateColumns={{base:"repeat(1, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)",xl:"repeat(5, 1fr)"}} gap={6}>
          {Senierdata.map((e) => {
            return (
              <GridItem   _hover={{transition:'all 0.3s ease-in',border:'4px solid transparent'}} w="100%" >
                <Image borderRadius='5px' src={e.src}></Image>
                <Box display='flex' justifyContent='space-between' marginBottom='0px' >
                <Text>{e.price_text}</Text>
                <Text decoration='line-through' color='grey' >{e.price}</Text>
                </Box>
                <Box display='flex' justifyContent='space-between' marginTop='-2px' >
                <Text >{e.Offer_Price}</Text>
                <Text  fontWeight='bold' >{e.discounted_price}</Text>
                </Box>
              </GridItem>
            );
          })}
        </Grid>
       
       <Text fontWeight='semibold' fontSize='22' >Quick Links</Text>
       
       <Text fontSize='18' margin='1%' fontWeight='bold' >Help & Support</Text>
       <Divider   bgColor='#dadada' height='1px' color='#dadada' lineHeight='20px'  />
       <Text fontSize='18' margin='1%'  fontWeight='bold' >Term and Conditions</Text>
       <Divider  bgColor='#dadada' height='1px' color='#dadada' lineHeight='20px' />
        
      </Box>

      <Box bg='#171a26' w='100%' paddingLeft='15%' paddingRight='15%' paddingBottom='50px' >
       <Box paddingTop='5%' display='flex' textAlign='center' justifyContent='space-between' >
        <Text color='white' fontWeight='bold' fontSize='240%' >FAQ'S</Text>
        <Text color='white' marginTop='15px' >See All</Text>
       </Box>
       <Text paddingBottom='4%' color='#6a6a6a' marginTop='-10px' >7 QUESTIONS</Text>
       <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
          How does home sample collection work?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Once you have chosen a convenient time slot for your booking, and placed an order, our WHO certified health professionals will arrive at your chosen address and collect blood and/or urine samples.  Once samples are collected, they will be processed at one of our partner labs closest to you and the test report will be available on your app and email.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'  color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        Can I reschedule/cancel my diagnostic test appointment?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px'/>
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%'  color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    The appointment can be rescheduled or cancelled 2 hours before your chosen slot.      </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'  color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        How can I receive my reports on email again ?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    You can email your test reports by going to Profile Activity &Records Medical Records Diagnostic Tests and selecting the email reports button.     </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        I did not get my reports on email
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Sometimes, mail providers mistakenly mark the reports email as Spam. Please check the spam folder (or) trigger the reports email again on the app   You would have received an SMS after your sample collection indicating the time it would take for results to be available  In case the communicated time has elapsed and you have not received your report on email, please reach out to us at hello@cure.fit     </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
         What instructions should I follow for my tests?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    All instructions that have to be followed for your tests will be communicated to you at the time of booking a slot. You will also receive an email covering the instructions.    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        How can I get a refund for my Full body Health Check /Diagnostic Screening pack ?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Only if you have not completed your Full Body health check up/ Diagnostic Screening within 1 year from the purchase date, please write to hello@curefit.com  e.g: If heath check is purchased on 1/10/2019, you can write to us till 1/10/2020. We do not refund any amount for health check ups with a purchase date older than a year.    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
         Can I club two or more sample collection slots
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    We are currently working on enabling multiple orders from the same address (for the same person or different).  Till then, you can request the phlebotomist who comes for the sample collection for the first order, to add on the rest of the tests (for the same person or different).  You can directly pay him via card / UPI / cash for the additional tests purchased.     </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>
     <Box marginTop='5%' marginBottom='4%'  >
      <Text color='#6e6e6e' fontWeight='bold' fontSize='400%' >THE BEST</Text>
      <Text marginTop='-2%' fontWeight='bold' marginBottom='-1%' color='#cccccc' fontSize='300%' >DOCTOR GIVES</Text>
      <Text color='#cccccc' fontSize='300%' fontWeight='bold' >THE LEAST MEDICINE</Text>
     </Box>
     <Footer1_cultfit/>
    </div>
  );
}

export default Care;
