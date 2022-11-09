import React, { useEffect } from 'react'
import { Carousel } from './Carousel'
import styles from "./store.module.css";
import {useDispatch, useSelector} from "react-redux";
import { getStore } from '../../../Redux/Store/store.action';
import {Link} from "react-router-dom";
export const Store = () => {
  const {data} = useSelector((store)=>store.store)
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStore());
  },[])
  return (
    <div>
        <div>
    <Carousel />
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
  )
}
