import React from 'react'
import {Box, Container, Flex, Grid, Hide, Img, Text} from '@chakra-ui/react'
import { motion } from 'framer-motion'
const Footer1_cultfit = () => {
  return (
 <Box bgColor='black' color='whiteAlpha.800' py='20' px='20px' >
<Grid  templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(2,1fr)", xl:"repeat(2,1fr)"}} gap='45px'>
<Box as={motion.div}>
    <Img
    borderRadius='14'              
    mixBlendMode='difference'
    src='https://play-lh.googleusercontent.com/DQ6S6FjOtoy5o4fGZInmjM7iTkwP-KsMDoaezm4n2g0akg0SvtI6NFbZ3ntxVeR6Yas' w='40' />
    <Text _hover={{color:'whiteAlpha.700'}} maxW='70%'>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</Text>
</Box>
<Grid lineHeight='30px' templateColumns={{base:"repeat(1,1fr)",sm:"repeat(2,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)", xl:"repeat(4,1fr)"}} gap='35px' >
<Flex flexDir='column'>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>cult.fit for business</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>cult.fit franchise</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>corporate partnerships</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>cult pass network</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>t&c for business</Text>
</Flex>
<Flex flexDir='column'>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>partner.fit</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>blogs</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>security</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>carrers</Text>
</Flex>
<Flex flexDir='column'>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>contact us</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>privacy policy</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>cult bmi calculator</Text>
    <Text _hover={{color:'whiteAlpha.700',cursor:'pointer'}}>term & conditions</Text>
</Flex>

<Flex flexDir='column' justifyContent='space-between'  >
    <Flex flexDir='column' justifyContent='space-around' boxSize='90px' objectFit='cover'>

    <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png' />
    <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png' />
    </Flex>
    <Hide below='md'>
    <Grid templateColumns={{md:'repeat(3,1fr)', lg:'repeat(5,1fr)'}}  maxW='120px' 
    // boxSize={{base:'30px', lg:'20px',xl:'30px'}}
     objectFit='cover'>
        <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg'  />
        <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg'/>
        <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg' />
        <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg' />
        <Img src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_32,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg'/>
    </Grid></Hide>
</Flex>
</Grid>

</Grid>

 </Box>
  )
}

export default Footer1_cultfit
