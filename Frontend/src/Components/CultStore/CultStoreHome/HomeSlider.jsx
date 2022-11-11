import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HomeSlider = ({arr,heading,comp}) => {
    const settings2 = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: true,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };
  return (
    <Box style={{width:"80%",margin:"auto",marginTop:"50px"}}>
       
        <Box style={{marginBottom:"10px"}}>
        <Heading>{heading}</Heading>
        <h1 >{comp}</h1>
        </Box>
      <Slider {...settings2} >
        {arr?.map((el) => (
          <Box bg={"white"} >
            <Box
             style={{gap:"30px"}}
              border={["none"]}
              borderRadius="5px"
              p="2"
              mr="10px"
            >
              <Box p={2}>
                <Image src={el.image} alt="" w="95%"/>
              </Box>
              <Box>
                <Text fontSize={15} fontWeight={"bold"}>
                  {el.title}
                </Text>
                <Text fontSize={17} fontWeight={"bold"}>
                  {el.price1}
                </Text>
                <Text fontSize={12}>{el.brand}</Text>
                <Text fontSize={12}>{el.off}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default HomeSlider
