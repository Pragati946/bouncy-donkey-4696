import { Box,Grid,GridItem,Stack,Text,Image, Center,Link, HStack, VStack, StackDivider } from "@chakra-ui/react";

export default function CultStoreFooter(){
    return (
 <Box paddingTop={["0px","100px"]} paddingBottom={["0px","100px"]}  color={"whiteAlpha.900"} bgColor={"blackAlpha.900"}>
              <Center >
  
    <Box width={"90%"} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(3,1fr)"]} margin="auto">
    <Box   >
  <VStack
  spacing={8}
  align='stretch'
>
    <Image width={"150px"} height={"39px"} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cultsport-text.svg"></Image>
    <Text size={"14px"}>cultsport offers top quality, best in class products which provide a holistic approach to fitness - combining fitness products with best in class fitness content, features, coaching & service</Text>
    </VStack>
  </Box>
 
  <Box   >
  
<VStack
spacing={[0,7]}
align='stretch'
marginLeft={["0px","10px","50px","230px"]}
>
<Link href=''>
contact us
</Link>
<Link href=''>
privacy policy
</Link>
<Link href=''>
refund policy
</Link>
<Link href=''>
terms & condition
</Link>
<Link href=''>
download andriod app
</Link>
</VStack>


</Box>
  <Box   >
  <VStack
  spacing={[3,12]}
  align='stretch'
>
    <Box marginLeft={["0px","10px","75px","220px"]} >
    <VStack
  spacing={[3,10]}
  width="max"
>
  <Image   width={"178px"} height={"60px"} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/app-store.png"></Image>
  <Image width={"178px"} height={"60px"} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/google-play.png"></Image>
  </VStack>
    </Box>
  
  <Box>
  <Stack  marginLeft={["0px","10px","75px","145px"]}  direction={"row"} spacing='24px'>
    
    <Image  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg"></Image>
    <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg"></Image>
    <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg"></Image>
    <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg"></Image>
    <Image src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg"></Image>
   </Stack>
  </Box>
</VStack>
 
  </Box>
    </Box>


</Center>
</Box>

)
}