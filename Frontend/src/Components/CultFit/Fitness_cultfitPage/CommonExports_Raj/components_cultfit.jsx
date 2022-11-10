import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const PassBoxElite = ({ele}) => {
  return (
    <Box color='white' fontWeight='bold' bgColor='rgb(255 255 255 / 5%)' p={{md:'3',lg:"15",xl:'17'}} border='1px solid grey' borderRadius='12' ml='10'>
    <Text p='2'>{ele.text1}</Text>
    <Image p='2' src={ele.image}/>
    <Text p='1'>{ele.text2}</Text>
  </Box>
  )
}

