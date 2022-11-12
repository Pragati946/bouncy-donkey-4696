import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
export const SingleCarousel = () => {
  const carouselcall = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const list = [
    {
      Url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg",
    },
    {
      Url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/0fd1e3fb-c9e2-4ffd-bf7c-eab810edaaf8.png",
    },
    {
      Url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg",
    },
    {
      Url: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/94851c73-d7f2-4597-a24d-e9a33aeb2c47.jpg",
    },
  ];
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
