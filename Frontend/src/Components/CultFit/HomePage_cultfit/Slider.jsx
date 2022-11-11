import React from "react";
import { useState } from "react";
import {Box, Grid, Img, Text} from '@chakra-ui/react'

const Slide = () => {
  const [image, setImage] = useState('https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,fl_progressive,f_auto,q_auto:eco/dpr_2/image/carefit/bundle/Alcohol_magazine.png');
  return (

    <Grid  borderRadius='12' templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(2,1fr)',xl:'repeat(2,1fr)'}} color='white' w='70%' m='auto' justifyContent='center' alignItem='center' borderRight='5px dashed grey'>

      <Box p='0' h={{sm:'30vh',md:'auto'}} backgroundRepeat='no-repeat' backgroundSize='cover' bgImg={image}  borderRadius='12'>
        </Box>
      <Box p='5' textAlign='center'>
          <Text  fontSize='25px' fontWeight='bold'>WellNess Hub</Text>  
          <Text>One place for all your well-being needs</Text>
        {
images_forBadge.map((ele)=>   <Text p='3' bg='whiteAlpha.200' m='2' borderRadius='12'  _hover={{bg: 'whiteAlpha.400'}} 
            onMouseEnter ={() =>
                setImage(ele.namepodkasterimage)
             } >   
            <Box textAlign='left' >
              <h2>{ele.namepodkaster}</h2>
            </Box>
  </Text>
        )}
      </Box>
    </Grid>
  );
};

export default Slide;

const images_forBadge=[{

 namepodkaster:"Podcasters",   
 namepodkasterimage:`https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png`
},
 {namepodkaster:"Musicians",   
 namepodkasterimage: `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy3.png`
},
 {namepodkaster:"Visual Artists",   
 namepodkasterimage: `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_458,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg5.png`
},
 {namepodkaster:"Communities",   
 namepodkasterimage: `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy4.png`
},
//  {namepodkaster:"Writers & Journalists",   
//  namepodkasterimage: `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png`
// },
//  {namepodkaster:"Gaming Creators",   
//  namepodkasterimage: `https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_597,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/wg_desktop/wg4.png`
// },
//  {namepodkaster:"Nonprofits",   
//  namepodkasterimage:`https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy2.png`
// }

]