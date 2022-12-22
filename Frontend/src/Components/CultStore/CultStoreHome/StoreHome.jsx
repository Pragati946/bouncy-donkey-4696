import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import CultStoreNavbar from "../CultStoreNavbar/CultStoreNavbar";
import Loader from "../../../utils/Loader";
import CultStoreFooter from "../CultStoreFooter/CultStoreFooter";
import { FAQ } from "./FAQ";

const StoreHome = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    getWomens();
    // setLoading(false);
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
    setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/mens?limit=30"
    );
    let data = await res.data;
    setMan(data);
    setLoading(false);
  };
  const [women, setWomen] = useState([]);
  const getWomens = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/womens?limit=30"
    );
    let data = await res.data;
    setWomen(data);
  };
  const [top, setTop] = useState([]);
  const getTop = async () => {
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/topSellings?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setTop(data);
  };
  const [arri, setArri] = useState([]);
  const getArri = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/topArrivals?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setArri(data);
  };
  const [foot, setFoot] = useState([]);
  const getFoot = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/footwears?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setFoot(data);
  };
  const [card, setCard] = useState([]);
  const getCard = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/cardio?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setCard(data);
  };
  const [cycle, setCycle] = useState([]);
  const getCycle = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/cycles?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setCycle(data);
  };
  const [acc, setAcc] = useState([]);
  const getAcc = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/accessories?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setAcc(data);
  };
  const [supp, setSupp] = useState([]);
  const getSupp = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/supplements?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setSupp(data);
  };
  const [equi, setEqui] = useState([]);
  const getEqu = async () => {
    // setLoading(true);
    let res = await axios.get(
      "https://fair-jade-bullfrog-gear.cyclic.app/equipments?limit=30"
    );
    let data = await res.data;
    // setLoading(false);
    setEqui(data);
  };
  return loading ? (
    <Loader />
  ) : (
    <>
      <HomeSlider
        heading="BESTSELLERS"
        comp="LOVED BY CULT MEMBERS"
        arr={women}
      />
      <HomeSlider heading="JUST LAUNCHED" comp="NEW ARRIVALS" arr={man} />
      <HomeSlider heading="T-SHIRTS" arr={top} />
      <HomeSlider heading="CYCLES" arr={arri} />
      <HomeSlider heading="CYCLES" arr={foot} />
      <HomeSlider heading="TREADMILLS" arr={card} />
      <HomeSlider heading="TREADMILLS" arr={acc} />
      <HomeSlider heading="TOPWEAR" arr={cycle} />
      <HomeSlider heading="TOPWEAR" arr={supp} />
        <HomeSlider heading="SHOP BY WORKOUT" arr={equi} />
        <br />
        <br />
        <FAQ />
        <CultStoreFooter />
    </>
  );
};
export default StoreHome;
