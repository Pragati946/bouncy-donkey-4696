import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";

export const ManCarousel = ({ list }) => {
  const carouselcall = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Box>
        <Box>
        <Slider {...carouselcall} style={{ overflow: "hidden" }}>
            {list.map((el)=>(
              <Box>
                <Image src={el.Url} alt="" style={{ width: "100vw" }}/>
              </Box>
            ))}
          </Slider>
        </Box>
  </Box>
  )
}
