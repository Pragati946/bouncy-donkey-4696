import React from "react";
import "./Navbarmind.css";
import { Box, Flex } from '@chakra-ui/react';

export const Navbarmind = () => {
  return (
    <Flex  zIndex= '200'
    // font-family= "Open Sans", 'sans-serif'
    fontSize= '16px'
    fontWeight= '700'
    backgroundColor= '#393a3b'
  h= '45px'
  display= 'flex'
  flexDirection= 'row'
  justifyContent= 'center'
  alignItems= 'center'
  boxSizing= 'border-box'
  color='#b8b9b9'
  position= 'sticky'
  top= '0'
  left= '0'
  right= '0' 
  transition= '1s ease-in-out'>
      <Box 
       display= 'flex'
       alignItems= 'center'
       padding= '5px 15px'
       color= '#b8b9b9'
       backgroundColor= '#15171c'
       borderRadius= '5px'
       marginRight= '10px'
      >Therapy</Box>
      <Box className="mind-link">Mindfullness</Box>
    </Flex>
  );
};
