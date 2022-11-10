import React from 'react';
import { Box, Grid, Text,IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import  {Carousel} from 'bootstrap';

// Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,

//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 2000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };


const AllCrousel_cultfit = ({props}) => {
  return  (
  <Carousel 
  prevIcon=''
  nextIcon=''   
  style={{height:'40vh', width:'70vw'}}
  >
      {
       props.map((el)=>
       <Carousel.Item  style={{backgroundColor:el.bgColor,borderRadius:'20px'}}>  
        <Grid templateColumns={{lg:'2,1fr',xl:'2,1fr'}} gap='30px'  color='white' justifyContent='center' w='75%' h='30%'>
        <Text fontSize={{md:'30px',sm:'25px'}}>{el.text}
          <Text fontSize='14px'>{el.text2} </Text>
        </Text>
        <Text>
          <Text>Time Left: </Text>
          12:49:00 PM</Text>
          </Grid>
   
    </Carousel.Item>
        )
      }
  </Carousel>)
  
}

export default AllCrousel_cultfit


// export function AllCrousel2(){

  // const [slider, setSlider] = React.useState();
  
  // const top = useBreakpointValue({ base: '90%', md: '50%' });
  // const side = useBreakpointValue({ base: '10%', md: '20px' });


// const cards = [
//   'https://files.myglamm.com/site-images/original/SK-Survey-1920x527_1.jpg',
//   'https://live.staticflickr.com/65535/49213180047_a4734ec97e_b.jpg',
//   'https://files.myglamm.com/site-images/original/Homepage-desktop-lipstikcks.jpg',
//   'https://files.myglamm.com/site-images/original/1920-x-527.jpg',
//   'https://files.myglamm.com/site-images/original/1920x527.jpg'
// ];

//   console.log(props)
// return (
  //   <Box 
  
//   position={'relative'}
//   height={'450px'}
//   marginBottom="-50px"
//   width={'full'}
//   overflow={'hidden'}>
//   {/* CSS files for react-slick */}
//   <link
//     rel="stylesheet"
//     type="text/css"
//     charSet="UTF-8"
//     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//   />
//   <link
//     rel="stylesheet"
//     type="text/css"
//     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//   />
//   {/* Left Icon */}
//   <IconButton
//     aria-label="left-arrow"
//     color={"black"}
//     bgColor={"white"}
//     borderRadius="full"
//     position="absolute"
//     left={side}
//     top={top}
//     transform={'translate(0%, -50%)'}
//     zIndex={2}
//     onClick={() => slider?.slickPrev()}>
//     <BiLeftArrowAlt />
//   </IconButton>
//   {/* Right Icon */}
//   <IconButton
//     aria-label="right-arrow"
//     // colorScheme="black"
//     color={"black"}
//     bgColor={"white"}
//     borderRadius="full"
//     position="absolute"
//     right={side}
//     top={top}
//     transform={'translate(0%, -50%)'}
//     zIndex={2}
//     onClick={() => slider?.slickNext()}>
//     <BiRightArrowAlt />
//   </IconButton>
//   {/* Slider */}
//   <Slider {...settings} ref={(slider) => setSlider(slider)}>
//     {cards.map((url, index) =>
//     (
  //       <Box
  //       cursor={"pointer"}
  //         key={index}
  //         height={'sm'}
  //         position="relative"
  //         backgroundPosition="center"
  //         backgroundRepeat="no-repeat"
  //         backgroundSize="cover"
  //         backgroundImage={`url(${url})`}
  //       />
  //     ))}
  //   </Slider>
// </Box>
// )

// }