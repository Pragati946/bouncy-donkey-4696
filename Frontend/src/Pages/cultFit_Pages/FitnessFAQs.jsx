import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'

function FitnessFAQs() {
  return (
    <>

<Box bg='#171a26' w='100%' paddingLeft='15%' paddingRight='15%' paddingBottom='50px' >
       <Box paddingTop='5%' display='flex' textAlign='center' justifyContent='space-between' >
        <Text color='white' fontWeight='bold' fontSize='240%' >FAQ'S</Text>
        <Text color='white' marginTop='15px' >See All</Text>
       </Box>
       <Text paddingBottom='4%' color='#6a6a6a' marginTop='10px' >FITNESS</Text>
       <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What is cult?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%'  marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    At Cult, we make fitness fun and easy. We have best-in-class trainers & offer group workouts ranging from yoga to Boxing. Our workouts can be done both at a cult center and at home with the help of do it yourself (DIY) workout videos. Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website.     </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'  color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What kind of workout formats are available at cult?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px'/>
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%'  marginRight='40%'  color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    At cult centers, you’ll find a wide variety of workout formats, such as - Boxing, Dance Fitness, Yoga, S&C, and HRX. These workouts focus on strength, muscle endurance, flexibility, stamina & balance. So mix it up, pick formats that help you achieve your personal fitness goals.  You’ll also find unique workout formats designed by Bollywood stars like Hrithik Roshan! We can assure you that your sessions will be more fun, interesting, and less monotonous.  You can find more info about all our workout formats here. If you prefer to workout at home, we've got you covered! You can follow DIY and LIVE videos that are meant for both beginner & advanced levels and focus on building strength, stamina & mobility.     </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'  color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
       How is the cult center different from a regular gym?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%'  marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    With our non-conventional training facility, we aim to give you a balanced mix of workouts that will enhance your health while having fun at the same time. Cult differentiates itself, from other fitness centers by offering group workouts that focus on overall development. Cult has a simple philosophy - make fitness fun and easy with the help of best-in-class trainers and group workouts. Our workouts can be done both at a cult center as group classes and at home with the help of do-it-yourself (DIY) workout videos.  Cult.fit uses the best in technology to give you a world-class experience. You can book classes, follow workout videos - all with the click of a button from the cult.fit app or website.  To know more about cult, check this link.      </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px'color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What is cultpass ELITE?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%'  marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Cultpass ELITE  is a membership pack where you can book as many classes as you like at any center or gym of your choice in the city. However, you can prebook only 4 classes at any given point in time. The moment you finish one class, you get the option to book another class.  We have 3 month, 6 month & 12 month cultpass. To find out more about memberships & pricing you can check our website     </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        Are cult classes beginner friendly?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Don’t worry! All our classes are beginner friendly. If you are doing an at Home cult.fit DIY session, we have sessions designed specifically for beginners. At our cult.fit centers too, we welcome beginners and look after them in every class. If it’s your first class, just arrive 10 minutes early, and we’ll make sure we help you get started and feel totally comfortable. To know more about what to expect in your first class read here.    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What is a cultpass LIVE?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    cultpass LIVE gives you unlimited access to all LIVE classes and DIY (on demand) sessions. This includes unlimited access to fitness, dance, meditation, health video content and podcasts. A cultpass LIVE member has an all access pass to celebrity masterclasses, ability to workout with friends and track their energy scores, and  monitor their progress in the form of reports. You can purchase the membership through the official cult.fit website or on the android app.    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        
What is the difference between gyms and cult centres?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    Gyms by cult.fit are a collection of handpicked full-service gyms which offer a safe space for you to workout using top quality gym equipment under the guidance of cult certified trainers. At the gyms, you can do a workout of your choice at your convenience. Cult centres offer scheduled trainer led group workouts in different formats like Boxing, HRX, S&C, Yoga and Dance Fitness that focus on overall development.     </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What is the difference between cultpass ELITE and cultpass PRO?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    cultpass ELITE gives you unlimited access to cult group classes, gyms and live workouts. cultpass PRO  gives you unlimited access to gyms and live.workouts and limited access to cult group classes.    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What do I get if I buy Cult Transform?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    cult transform connects you with an expert Transform Coach (whatsapp + calls) who guides you through sustainable lifestyle changes to achieve your health goals which include fat loss, weight loss and getting fit. You also get unlimited access to cultpass Live online home workout & meditation sessions, a customised workout plan, nutrition guidance and daily reads on fitness & habits. Please note this does not include a gym membership.    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What are the different types of fitness centers available on cultpass?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    There are 3 types of fitness centers available on cultpass. 1) Cult centers. 2) ELITE gyms. 3) PRO gyms. You get unlimited access to all centers in a city with a cultpass ELITE. You get unlimited access to PRO gyms and 2 sessions per month at cult centers or ELITE gyms in a city with cultpass PRO    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What are the different types of Memberships that I can buy to access gyms?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    You can access the gyms listed on the cult.fit app by buying a cultpass ELITE or a cultpass PRO. cultpass ELITE will give you unlimited access to all gyms in a city cultpass PRO will give you unlimited access to all PRO gyms and 2 sessions per month at ELITE gyms or cult centers in a city. In addition to gym access, you get unlimited access to LIVE workouts with both the cultpasses    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box margin='10px' color='#cccfd1' flex='1' textAlign='left' fontWeight='bold' fontSize='150%'>
        What is the difference between a PRO gym and a ELITE gym?
        </Box>
        <AccordionIcon color='#cccfd1' boxSize='32px' />
      </AccordionButton>
    </h2>
    <AccordionPanel marginLeft='2%' marginRight='40%' color='#cccfd1' fontWeight='semibold' fontSize='110%' pb={4}>
    PRO gyms are full service gyms that offer you great value. They provide a safe space to workout with top quality equipment and cult certified trainers present to assist you ELITE gyms are a curated collection of handpicked,  full-service gyms at prime locations. They offer everything you get in a PRO gym plus added comfort and luxury to make your workout enjoyable. Lookout for the "ELITE" tag to to identify a ELITE gym.     </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>

    </>
  )
}

export default FitnessFAQs