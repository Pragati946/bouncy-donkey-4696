import React, { useEffect } from "react";
import styles from "./man.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getManProduct } from "../../../Redux/ManProduct/man_store.action";
import { Link } from "react-router-dom";
import { ManCarousel } from "../../Carousel/ManCarousel";
export const Man = () => {
  const { data } = useSelector((store) => store.man);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManProduct());
  }, []);

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
    <div>
      <div>
        <ManCarousel list={list} />
      </div>
      <div>
        {/* {data.map((el)=>{
      <div className="store__productCard" key={el._id}>
                    <Link to={`/products/${el._id}`} id="store__productCard-link">
                      <img src={el.imageUrl[0]} alt="" />
                      <h3>{el.title}</h3>
                      <div className="store__productCard-priceBox">
                        <h3>₹{el.price}</h3>
                        <p>₹{el.oldprice}</p>
                        <h4>35% Off</h4>
                      </div>
                    </Link>
                  </div>
    })} */}
      </div>
    </div>
  );
};
