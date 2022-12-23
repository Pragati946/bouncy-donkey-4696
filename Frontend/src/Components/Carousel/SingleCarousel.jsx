import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
export const SingleCarousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:true
  };
  const dataCarousel = [
    {
      img: "https://img7.hkrtcdn.com/22230/bnr_2222996_o.jpg",
    },
    {
      img: "https://img10.hkrtcdn.com/7579/bnr_757879_o.png",
    },
    {
      img: "https://img8.hkrtcdn.com/10131/bnr_1013017_o.jpg",
    },
    {
      img: "https://img4.hkrtcdn.com/7579/bnr_757883_o.png",
    },
    {
      img: "https://img4.hkrtcdn.com/10162/bnr_1016123_o.jpg",
    },
    {
      img: "https://img7.hkrtcdn.com/22577/bnr_2257636_o.jpg",
    },
  ];
  return (
    <Box mb="40px">
      <Slider {...setting} style={{ overflow: "hidden" }}>
        {dataCarousel.map((el) => (
          <Box>
            <Image src={el.img} alt="imgUrl" style={{ width: "100vw" }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
