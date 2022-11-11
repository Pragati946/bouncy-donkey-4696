import { Box, Heading, Image} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useState,useEffect  } from "react";
import HomeSlider from "./HomeSlider";
import { FAQ } from "./FAQ";
const StoreHome = () => {
  const [man, setMan] = useState([]);
  const getMens = async () => {
    let res = await axios.get("http://localhost:8080/mens?limit=30");
    let data = await res.data;
    setMan(data);
  };
  useEffect(() => {
    getMens();
    getWomens();
    getTop();
    getArri();
    getFoot();
    getCard();
    getCycle();
    getAcc();
    getSupp();
    getEqu();
  }, []);
  const [women, setWomen] = useState([]);
  const getWomens = async () => {
    let res = await axios.get("http://localhost:8080/womens?limit=30");
    let data = await res.data;
    setWomen(data);
  };
  const [top, setTop] = useState([]);
  const getTop = async () => {
    let res = await axios.get("http://localhost:8080/topSellings?limit=30");
    let data = await res.data;
    setTop(data);
  };
  const [arri, setArri] = useState([]);
  const getArri = async () => {
    let res = await axios.get("http://localhost:8080/topArrivals?limit=30");
    let data = await res.data;
    setArri(data);
  };
  const [foot, setFoot] = useState([]);
  const getFoot = async () => {
    let res = await axios.get("http://localhost:8080/footwears?limit=30");
    let data = await res.data;
    setFoot(data);
  };
  const [card, setCard] = useState([]);
  const getCard = async () => {
    let res = await axios.get("http://localhost:8080/cardio?limit=30");
    let data = await res.data;
    setCard(data);
  };
  const [cycle, setCycle] = useState([]);
  const getCycle= async () => {
    let res = await axios.get("http://localhost:8080/cycles?limit=30");
    let data = await res.data;
    setCycle(data);
  };
  const [acc, setAcc] = useState([]);
  const getAcc= async () => {
    let res = await axios.get("http://localhost:8080/accessories?limit=30");
    let data = await res.data;
    setAcc(data);
  };
  const [supp, setSupp] = useState([]);
  const getSupp= async () => {
    let res = await axios.get("http://localhost:8080/supplements?limit=30");
    let data = await res.data;
    setSupp(data);
  };
  const [equi, setEqui] = useState([]);
  const getEqu= async () => {
    let res = await axios.get("http://localhost:8080/equipments?limit=30");
    let data = await res.data;
    setEqui(data);
  };
 


  return (
    <Box>
        {/* <ManCarousel /> */}
        {/* <HomeSlider heading="BESTSELLERS" comp="LOVED BY CULT MEMBERS" arr={women} />
        <HomeSlider heading="JUST LAUNCHED" comp="NEW ARRIVALS"  arr={man} />
        <HomeSlider heading="T-SHIRTS" arr={top} />
        <HomeSlider heading="CYCLES"  arr={arri} />
        <HomeSlider heading="CYCLES" arr={foot} />
        <HomeSlider heading="TREADMILLS" arr={card} />
        <HomeSlider heading="TREADMILLS" arr={acc} />
        <HomeSlider heading="TOPWEAR" arr={cycle} />
        <HomeSlider heading="TOPWEAR" arr={supp} />
        <HomeSlider heading="SHOP BY WORKOUT" arr={equi} />  */}
        {/* <Box>
            <Box style={{width:"80%",margin:"auto"}}>
            <Heading>SPOTLIGHT</Heading>
           <Box style={{display:"flex",gap:"40px"}}>
           {spotlight.map((el)=>(
                <Box >
                <Image src={el.Url} alt=""/>
            </Box>
          
            ))}
             </Box>
            </Box>
        </Box> */}
       <FAQ/>
    </Box>
  );
};

export default StoreHome;
const spotlight=
[
    {
        Url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png",
    },
    {
        Url:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png",
    }
]