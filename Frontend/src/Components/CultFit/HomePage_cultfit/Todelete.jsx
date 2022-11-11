import { Box,Botton } from '@chakra-ui/react'
import React from 'react'

const Todelete = () => {
  return (
    <>
    <Box overflow='hidden' id="headerDiv">
        <video autoplay muted loop id="myVideo">
            <source
                src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_680,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
                type="video/mp4" />
        </video>
        <Box id="img">
            <img src="./Untitled-1.png" alt="" />
        </Box>
        <Box id="thought">
            <h1>A fitness movement that is worth</h1>
            <h1 id="h2">breaking a sweat for</h1>
            <Botton>EXPLORE CULTPASS</Botton>
        </Box>
        </Box>
</>

  )
}

export default Todelete
