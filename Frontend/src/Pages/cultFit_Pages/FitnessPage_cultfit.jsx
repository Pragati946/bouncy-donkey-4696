import React from 'react'
import {Box, Button, Container,Grid, Flex, Heading, Hide, Image, Img, Text} from '@chakra-ui/react'
// import AllCrousel_cultfit from './Crousles/AllCrousel_cultfit'
import {  Table,  Thead,  Tbody,  Tfoot,  Tr,  Th,  Td,  TableCaption,  TableContainer,} from '@chakra-ui/react'
import {CheckCircleIcon } from '@chakra-ui/icons'
import {MdHighlightOff} from 'react-icons/md'
import { PassBoxElite } from '../../Components/CultFit/Fitness_cultfitPage/CommonExports_Raj/components_cultfit'
const Crousel1_cultfit = () => {
  return (
<>
    <Box >
      {/* top section */}
      <Box m='auto' pos='initial'>
        <Img border='1px solid red' shadow='inner(black)' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/f7d43252-4f8a-4113-94b1-2dd97fbcca16.png' zIndex='-1'/>
        <Box pos='absolute' top='25%' left='25%' border='1px solid white' >
        <Button  bg='white'  variant='solid'><Text fontWeight='bold' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>TRY FOR FREE</Text> </Button>
<Grid templateColumns='repeat(3,1fr)'>
  {
data_passes_fitness.map((ele)=>
<PassBoxElite ele={ele}/>
      )
  }

</Grid>
        </Box>
      </Box>
    </Box>
    <Box m='auto' textAlign='center' bg='black' color='white'>
{/* <AllCrousel_cultfit props={rapid_crousel}/> */}
       {/* At work section  */}

       <Box >
        <Heading>AT HOME</Heading>
        <Text>Live group workouts with calorie tracking</Text>
        {/* '"Crousers' */}
       </Box>


{/* table section++++++++++++++++++++++ */}
<Hide below='md'>
       <Box w='75%' m='auto'>
        <Heading>Choose your cultpass</Heading>
        <Text>3 flexible plans to suit your fitness needs</Text>
        <TableContainer>
  <Table>
    
    <Thead>
      <Tr>
        <Th></Th>{
        data_passes_fitness.map((ele)=>
        <Th>
    <Image src={ele.image} w='50%' h='50%' />    
   </Th>
      )
  }
      </Tr>
    </Thead>
    <Tbody>
      <Tr >
        <Th>ELITE Gyms & At Centre Group Classes </Th>
        <Td  border='1px solid grey' > <CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td  border='1px solid grey' ></Td>
        <Td  border='1px solid grey' > <MdHighlightOff/> </Td>
      </Tr>
      <Tr>
        <Th>PRO GYMS</Th>
        <Td border='1px solid grey'><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td border='1px solid grey'><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td border='1px solid grey' ><MdHighlightOff/></Td>
      </Tr>
      <Tr>
        <Th>Smart workout plan</Th>
        <Td border='1px solid grey'><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td border='1px solid grey' ><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td border='1px solid grey' ><MdHighlightOff/></Td>
      </Tr>
    </Tbody >

    <Tfoot  >
      <Tr>
        <Th>At home workouts</Th>
        <Td border='1px solid grey'><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
        <Td border='1px solid grey' ><CheckCircleIcon color='blue.300'  /> <br /> Ultimate</Td>
        <Td border='1px solid grey' ><CheckCircleIcon color='blue.300' /> <br /> Ultimate</Td>
      </Tr>
      <Tr>
        <Th></Th>
        <Td>Starting at ₹1178/ month <br />  <Button  fontWeight='bold'  bgGradient='linear(to-l, #7928CA, #FF0080)'>BUY NOW</Button></Td>

        <Td border='1px solid grey'>Starting at ₹714/ month  <br />  <Button bg='white'  variant='solid'><Text fontWeight='bold' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>BUY NOW</Text> </Button></Td>

        <Td>Starting at ₹115/ month <br />  <Button bg='white'  variant='solid'><Text fontWeight='bold' bgClip='text' bgGradient='linear(to-l, #7928CA, #FF0080)'>BUY NOW</Text> </Button></Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
       </Box>
       </Hide>

    {/* table section++++++++++++++++++++++ */}
    {/* FREE TRailS++++++++++++++++++++++ */}
<Box>
  <Text fontSize='5xl'>FREE TRAILS</Text>
  <Grid templateColumns={{lg:'repeat(3,1fr)',xl:'repeat(3,1fr)'}} w='60%' m='auto' alignItems='center'>
 
    <Image  maxH='90%' _hover={{maxH:'100%',transition:'all 0.5s ease-out'}} boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png' /> 
  
  
    <Image  maxH='100%' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png' /> 
   
    <Image maxH='90%' ml='10%' _hover={{maxH:'100%',ml:'0',transition:'all 0.5s ease-out'}}  boxShadow='rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset' src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png' /> 
    
  </Grid>
</Box>

{/* Crousels 2 */}
{/* Crousels 2 */}

{/* Crousels 2 */}
{/* Crousels 2 */}

<Box bgImage="url('https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/e33780ba-8a13-4254-b2f1-2b50be6273e0.svg')" backgroundSize='cover' opacity='0.7' h='500px' border='1px solid white'>
  <Grid>
<Box>
  <Text>Fitify Community</Text>
  <Text>Be a part of the cult community</Text>
  <Text>Join the FaceBook community today</Text>
  <a>JOIN NOW </a>
</Box>
<Img></Img>

  </Grid>
</Box>

    </Box>
</>
  
  )
}

export default Crousel1_cultfit


export const data_passes_fitness=[
  {
    text1:'cultpass',
  image:'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png',
  text2:'Starting at ₹1083 / month',
},
  {
  text1:'cultpass',
  image:'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png',
  text2:'Starting at ₹857 / month',
},
  {
  text1:'cultpass',
  image:'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png',
  text2:'Starting at ₹115 / month',
},
]

const rapid_crousel=[
  {
bgCol:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/840392e5-7a2c-4f23-9d7c-14f9be6c77f3.jpg",
bgColor:'#718096',
text:'FREE ₹1500 FLIPKART VOUTURE + EXTRA ₹500 OFF + 3 MONTHS EXTENSION ',
text2:"on FITIFY ELITE",
time:''
  },
  {
bgCol:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/ef47bcb2-c25c-4753-8880-fa588910c092.jpg",
bgColor:'#718096',
text:'FREE ₹750 FLIPKART VOUTURE + EXTRA ₹500 OFF + 2.5 MONTHS EXTENSION ',
text2:"on FITIFY PRO",
time:''
  },
  {
bgCol:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/dd4fa05e-d599-4a1f-b23f-5f65fb7ca2b7.jpg",
bgColor:'#285E61',
text:'UPTO 4 MONTHS EXTENSION FREE',
text2:"on FITIFY LIVE",
time:''
  },
  {
bgCol:"https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1439,q_auto:eco,dpr_1,f_auto,fl_progressive/image/vm/ef47bcb2-c25c-4753-8880-fa588910c092.jpg",
bgColor:'#702459',
text:'UPTO ₹500 OFF + 3 MONTHS EXTENSION | ENDS IN',
text2:"on FITIFY TRANSFORM",
time:''
  },
]