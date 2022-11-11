import { Box } from "@chakra-ui/react";
import { ManCarousel } from "../../Carousel/ManCarousel";
export const Man = () => {
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
        <ManCarousel list={list} />
    </Box>
  );
};
