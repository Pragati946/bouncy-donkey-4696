import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./store.module.css";

export const Carousel = ({ list }) => {
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
    <div>
     {/* <div className="store_slider">
          <Slider {...carouselcall} style={{ overflow: "hidden" }}>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/2ed28f9b-4a4f-4c4d-bd1d-c3c74af005a1.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/c596212a-0395-4c49-97b4-7a5fa95bdf7b.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
          </Slider>

        </div> */}
        <div>
        <Slider {...carouselcall} style={{ overflow: "hidden" }}>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/0fd1e3fb-c9e2-4ffd-bf7c-eab810edaaf8.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/b18213c7-7fa6-4281-a0b2-785366ead9d0.jpg"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/94851c73-d7f2-4597-a24d-e9a33aeb2c47.jpg"
                alt=""
                style={{ width: "100vw" }}
              />
            </div>
            {/* <div>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/95def045-a089-4723-b647-58f640a37fdf.png"
                alt=""
                style={{ width: "100vw" }}
              />
            </div> */}
          </Slider>
        </div>
  </div>
  )
}
