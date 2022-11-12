import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const PassBoxElite = ({ele}) => {
  return (
    <Box _hover={{bg:'whiteAlpha.500'}}  color='white' fontWeight='bold' bgColor='rgb(255 255 255 / 5%)' p={{md:'3',lg:"15",xl:'17'}} border='1px solid grey' borderRadius='12' ml='10' >
    <Text p='2'>{ele.text1}</Text>
    <Image p='2' src={ele.image}/>
    <Text p='1'>{ele.text2}</Text>
  </Box>
  )
}




export const cards_premium=[ //home page content cards
  {
    img_cards_premium:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png",
cont1_cards_premiumcards:"At-center group classes",
cont2_cards_premiumcards:"All ELITE & PRO gyms and Gym equipments",
cont3_cards_premiumcards:"At-home live workout",
  },
  {
    img_cards_premium:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png",
cont1_cards_premiumcards:"All PRO gyms",
cont2_cards_premiumcards:"2 Sessions/m at ELITE gyms & group classes",
cont3_cards_premiumcards:"At-home live workout",
  },
  {
    img_cards_premium:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png",
cont1_cards_premiumcards:"At-home classes",
cont2_cards_premiumcards:"Celebrity Workouts",
cont3_cards_premiumcards:"Goal-based Workouts and Meditation Sesssions",
  },
] 



export const Home_cult_grid4_boxes=[
  {
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/cult-transform-glass-green.png",
title_features:"fitie transform",
sub_Title_features:'Get coached to lose weight for good'
},
  {
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/sugar-fit-glass-purple.png",
title_features:"the .fit way",
sub_Title_features:'Making heathly eay , one day at a time'
},
  {
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-workout-gear.png",
title_features:"Workout Gear",
sub_Title_features:'Get coached to lose weight for good'
},
  {
img_url_features_backgrr:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/four-square-card/glass-blog-multi-color.png",
title_features:"Sugar.fit",
sub_Title_features:'Get coached to lose weight for good'
}
]
