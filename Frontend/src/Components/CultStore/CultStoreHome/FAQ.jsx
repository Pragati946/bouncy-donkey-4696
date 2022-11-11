import { Box, Heading} from '@chakra-ui/react';
import React from 'react'
import Faq from "react-faq-component";
export const FAQ = () => {
  return (
    <Box style={{backgroundColor:"#f2f4f8" ,height:"300px"}}>
         <Box>
            <Box>
              <Box style={{marginBottom:"60px"}} >
                <Heading style={{marginBottom:"20px"}}>FAQS</Heading>
                <b style={{color:"grey"}}>2 QUESTIONS</b>
              </Box>
            </Box>
            <Box style={{backgroundColor:"#f2f4f8", color:"grey"}}>
              <Faq data={data} style={{backgroundColor:"#f2f4f8",color:"grey"}}/>
            </Box>
          </Box>
    </Box>
  )
}

const data={
    rows:[
        {
          title: " What is cultsport and what does it offer?",
          content:
            "cultsport is a premium workout wear brand from the house of cure.fit. cultsport offers a variety of premium workout and sports gear that helps fitness enthusiasts and everyday athletes up their daily fitness game and look good while they are at it. With a goal to bring top notch products with a foot forward in fashion, longevity and functionality, cultsport attempts at bringing the best performing apparel, footgear and accessories ideal for all workout formats. Read here to know in detail how cultsport is designed to enhance your workout here.",
        },
        {
          title: "What makes cultsport special?",
          content:
            "cultsport is a carefully crafted array of apparel and accessories which aims to ensure that you wear fabric exactly suited to the activity you wish to engage in. Be it fly-dry fabrics to ensure superior sweat absorption and drying, stretchable fabrics to help your workout movement range, breathable ones to aid your running experience and design elements that ensure minimal chafing and odour resistance (anti-microbial elements). We've got them all! Read here to know in detail how cultsport is designed to enhance your workout.",
        },
      ]
}
  