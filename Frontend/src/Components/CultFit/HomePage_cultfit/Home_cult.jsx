import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Hide,
  Img,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { data_passes_fitness } from "../Fitness_cultfitPage/Crousel1_cultfit";
import { PassBoxElite } from "../Fitness_cultfitPage/CommonExports_Raj/components_cultfit";

const Home_cult = () => {
  console.log(data_passes_fitness);
  return (
    <>
   <Box  className="videoBox_top_cultfit" h="100vh">
    <Box opacity='.5'>
<video
  autoPlay
  loop  
  src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
/>
</Box>

<Box className="contentVideo_cultfit"  position="absolute" top="10">
  <Flex>
    {/* <Box bg='black'>
</Box> */}

    <Box>
      <Img
      w='20vw'
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
        alt=""
      />
      <Hide below='sm'>
      <Grid w="100%" templateColumns={{md:'repeat(2,1fr)',lg:"repeat(3,1fr)",xl:'repeat(3,1fr)'}}>
        {data_passes_fitness.map((ele) => (
          <PassBoxElite ele={ele} />
        ))}
      </Grid>
      </Hide>
    </Box>

    {/* <Box>
<Img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png" alt="" />
<Img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png" alt="" />
</Box> */}
  </Flex>
</Box>

{/* motion Boxs********************** */}
<Box textAlign="center" border="1px solid red" p="20">
  <motion.Box animate={{}}>
    <Flex objectFit="cover" justifyContent="space-between">
      <Img
        boxSize="30%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_1.png"
      ></Img>
      <Img
        boxSize="30%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_2.png"
      ></Img>
    </Flex>
  </motion.Box>

  <Text fontSize="40px">One membership for all your fitness needs</Text>

  <motion.Box animate={{}}>
    <Flex objectFit="cover" justifyContent="space-between">
      <Img
        boxSize="25%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_3.png"
        alt=""
      />
      <Img
        boxSize="30%"
        mt="150px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_4.png"
        alt=""
      />
      <Img
        boxSize="25%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_Img_5.png"
        alt=""
      />
    </Flex>
  </motion.Box>
</Box>

{/* motion Boxs2********************** */}

<Box textAlign="center" p="20">
  <Text pos="sticky" top="20%" fontSize="60px" fontWeight="bold">
    Fun, trainer led <br /> group classes
  </Text>
  <motion.Box
    border="10px solid green"
    pos="sticky"
    top="20%"
    zIndex="-1"
    transition={{ velocity: "0.7" }}
  >
    <Flex objectFit="cover" justifyContent="center">
      <Img
        boxSize="21%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
      ></Img>

      <Img
        boxSize="21%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
      ></Img>

      <Img
        boxSize="21%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
      ></Img>

      <Img
        boxSize="21%"
        mt="50px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
      ></Img>
    </Flex>
    {/* </motion.Box>



<motion.Box  animate={{}}> */}
    <Flex objectFit="cover" justifyContent="center">
      <Img
        boxSize="21%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
        alt=""
      />
      <Img
        boxSize="21%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
        alt=""
      />
      <Img
        boxSize="21%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png"
        alt=""
      />
      <Img
        boxSize="21%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-8.png"
        alt=""
      />
    </Flex>
  </motion.Box>
</Box>

{/* motion Boxs end...............********************** */}



      {/* Static Boxs    ...............********************** */}
      {/* CultFit Pass Boxs    ...............********************** */}

      <Box bg='black'>
        <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(1,1fr)',lg:'repeat()',xl:'repeat(3,1fr)'}} color='revert'  m='auto' w='60%' gap='3' justifyContent='space-evenly'>


        <Box border='2px solid grey'  borderRadius='12px'>
            <Flex flexDirection={{base:'row',sm:'row',md:'row',lg:"column",xl:"column"}} >
            <Img
              w="300px"
              m="22px 0"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
              alt="live-pass"
              className="homePage__cultpass-poster"
            />
            {/* <Box width='60px' pos='absolute' top='200px' left='30px'>
              <Img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                alt="cultpass-small-logo"
              />
              <Img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                alt="live-logo"
              />
            </Box>
         */}

            <Box className="homePage__cultpass-type-one_textBox-title">
              <Text fontSize="25px" fontWeight="700" color="grey" my="22px">
                Unlimited access to
              </Text>
              <UnorderedList
                pl="25px"
                color="rgb(145, 144, 144)"
                fontWeight="bold"
                lineHeight="2"
                my="22px"
              >
                <ListItem>At-center group classes</ListItem>
                <ListItem>All ELITE & PRO gyms and Gym equipments</ListItem>
                <ListItem>At-home live workout</ListItem>
              </UnorderedList>
         

          <Flex justifyContent='space-between' alignItems='center' my='30px' px='3'>
            <Button>TRY FOR FREE</Button>
            <Button>LEARN MORE</Button>
          </Flex>
            </Box>
          </Flex>
        </Box>




          <Box border='2px solid grey' borderRadius='12px'>
            <Flex flexDir={{base:'row',sm:'row',md:'row',lg:'column',xl:'column'}} >
            <Img
                w="300px"
                m="22px 0"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
                alt="elite-pass"
              />
              {/* <Box width='60px' pos='absolute' top='200px' left='30px'>
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass-small-logo"
                />
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                  alt="pro-logo"
                />
              </Box> */}
            

            
              <Box>
                <Text fontSize="25px" fontWeight="700" color="grey" my="22px">
                  Unlimited access to
                </Text>
                <UnorderedList
                  pl="25px"
                  color="rgb(145, 144, 144)"
                  fontWeight="bold"
                  lineHeight="2"
                  my="22px"
                >
                  <ListItem>All PRO gyms</ListItem>
                  <ListItem>2 Sessions/m at ELITE gyms & group classes</ListItem>
                  <ListItem>At-home live workouts</ListItem>
                </UnorderedList>
            

            <Flex  justifyContent='space-between' alignItems='center' my='30px' px='3'>
              <Button>TRY FOR FREE</Button>
              <Button>LEARN MORE</Button>
            </Flex>
              </Box>
            </Flex>
          </Box>






          <Box border='2px solid grey'  borderRadius='12px' >
            <Flex flexDir={{base:'row',sm:'row',md:'row',lg:'column',xl:'column'}} >
            <Img
                w="300px"
                m="22px 0"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
                alt="live-pass"
                className="homePage__cultpass-poster"
              />
              {/* <Box width='60px' pos='absolute' top='200px' left='30px'>
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_68,ar_3.811,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
                  alt="cultpass-small-logo"
                />
                <Img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                  alt="live-logo"
                />
              </Box>
           */}

              <Box className="homePage__cultpass-type-one_textBox-title">
                <Text fontSize="25px" fontWeight="700" color="grey" my="22px">
                  Unlimited access to
                </Text>
                <UnorderedList
                  pl="25px"
                  color="rgb(145, 144, 144)"
                  fontWeight="bold"
                  lineHeight="2"
                  my="22px"
                >
                  <ListItem>At-home classes</ListItem>
                  <ListItem>Celebrity Workouts</ListItem>
                  <ListItem>Goal-based Workouts and Meditation Sesssions</ListItem>
                </UnorderedList>
           

            <Flex justifyContent='space-between' alignItems='center' my='30px' px='3'>
              <Button>TRY FOR FREE</Button>
              <Button>LEARN MORE</Button>
            </Flex>
              </Box>
            </Flex>
          </Box>
        </Grid>

       
<Grid w='70%' border='1px solid red' justifyContent='space-around' templateColumns={{base:'repeat(1,1fr)',sm:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:"repeat(2,1fr)",xl:'repeat(2,1fr)'}} m='auto' gap='3'>
{
Home_cult_grid4_boxes.map((ele)=>
<Box  border='1px solid red' w='400px' h='400px' borderRadius='12px' 
 style={{
    backgroundRepeat:'no-repeat', backgroundSize:'cover',
}}
color=''
backgroundImage={ele.img_url_features_backgrr}
>

            <Flex justifyContent='space-between' alignItems='center' py='2%' px='4%' >
           
                <Box className="homePage__posters-card2_text-titleText">
                  <Text fontSize='30px' fontWeight='900'>{ele.title_features}</Text>
                  <Box className="homePage__posters-card2_text-titleText-icon">
                    <Img w='35px'
                      src={ele.img_url_features}
                      alt="arrow"
                      />
                  </Box>
                </Box>

                <Box px='4%' className="homePage__poster-card2_text-subText">
                 {ele.sub_Title_features}
                </Box>
           
            </Flex>
          </Box>
        )
        }
        </Grid>

        </Box>      


        </Box>      
    </>
  );
};

export default Home_cult;



const Home_cult_grid4_boxes=[
    {
img_url_features:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg",
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/cult-transform-glass-green.png",
title_features:"fitie transform",
sub_Title_features:'Get coached to lose weight for good'
},
    {
img_url_features:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg",
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/sugar-fit-glass-purple.png",
title_features:"the .fit way",
sub_Title_features:'Making heathly eay , one day at a time'
},
    {
img_url_features:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg",
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-workout-gear.png",
title_features:"Workout Gear",
sub_Title_features:'Get coached to lose weight for good'
},
    {
img_url_features:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_40,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/four-square-card/glass-circle-arrow.svg",
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-blog-multi-color.png",
title_features:"Sugar.fit",
sub_Title_features:'Get coached to lose weight for good'
}
]
