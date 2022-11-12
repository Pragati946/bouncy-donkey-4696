import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import { SingleCarousel } from "../../Carousel/SingleCarousel";
// import { FAQ } from "./FAQ";

const StoreHome = () => {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getWomens();
    setLoading(false)
    getMens();
    getTop();
    getArri();
    getFoot();
    getCard();
    getCycle();
    getAcc();
    getSupp();
    getEqu();

  }, []);
  const [man, setMan] = useState([]);
  const getMens = async () => {
    let res = await axios.get("http://localhost:8080/mens?limit=30");
    let data = await res.data;
    setMan(data);
  };
  const [women, setWomen] = useState([]);
  const getWomens = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/womens?limit=30");
    let data = await res.data;
    setWomen(data);
  };
  const [top, setTop] = useState([]);
  const getTop = async () => {
    
    let res = await axios.get("http://localhost:8080/topSellings?limit=30");
    let data = await res.data;
    // setLoading(false);
    setTop(data);
  };
  const [arri, setArri] = useState([]);
  const getArri = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/topArrivals?limit=30");
    let data = await res.data;
    // setLoading(false);
    setArri(data);
  };
  const [foot, setFoot] = useState([]);
  const getFoot = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/footwears?limit=30");
    let data = await res.data;
    // setLoading(false);
    setFoot(data);
  };
  const [card, setCard] = useState([]);
  const getCard = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/cardio?limit=30");
    let data = await res.data;
    // setLoading(false);
    setCard(data);
  };
  const [cycle, setCycle] = useState([]);
  const getCycle = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/cycles?limit=30");
    let data = await res.data;
    // setLoading(false);
    setCycle(data);
  };
  const [acc, setAcc] = useState([]);
  const getAcc = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/accessories?limit=30");
    let data = await res.data;
    // setLoading(false);
    setAcc(data);
  };
  const [supp, setSupp] = useState([]);
  const getSupp = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/supplements?limit=30");
    let data = await res.data;
    // setLoading(false);
    setSupp(data);
  };
  const [equi, setEqui] = useState([]);
  const getEqu = async () => {
    // setLoading(true);
    let res = await axios.get("http://localhost:8080/equipments?limit=30");
    let data = await res.data;
    // setLoading(false);
    setEqui(data);
  };
  return (
    <>
      <SingleCarousel/>
      <HomeSlider heading="BESTSELLERS" comp="LOVED BY CULT MEMBERS" arr={women} loading={loading}/>
      <HomeSlider heading="JUST LAUNCHED" comp="NEW ARRIVALS" arr={man} loading={loading}/>
      <HomeSlider heading="T-SHIRTS" arr={top} loading={loading} />
      <HomeSlider heading="CYCLES" arr={arri} loading={loading}/>
      <HomeSlider heading="CYCLES" arr={foot} loading={loading}/>
      <HomeSlider heading="TREADMILLS" arr={card} loading={loading}/>
      <HomeSlider heading="TREADMILLS" arr={acc} loading={loading}/>
      <HomeSlider heading="TOPWEAR" arr={cycle} loading={loading}/>
      <HomeSlider heading="TOPWEAR" arr={supp} loading={loading}/>
      <HomeSlider heading="SHOP BY WORKOUT" arr={equi} loading={loading}/>
    </>
  );
};
export default StoreHome;
