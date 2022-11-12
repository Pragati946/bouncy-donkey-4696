import {  Box,  Button,  Flex,  Hide,  IconButton,  Image,  Input,  InputGroup,  InputLeftElement,  MenuDivider,  MenuGroup,
  Show,  Text,} from "@chakra-ui/react";
import React from "react";
import styles from "./CultNavbar.module.css";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon} from "@chakra-ui/icons"


let data = [
  "Imphal",
  "Ranchi",
  "Dehradhun",
  "Bhubaneswar",
  "Jabalpur",
  "Vijayawada",
  "Nasik",
  "Moradabad",
  "Patna",
  "Khanna",
  "Allahabad",
  "Jalgaon",
  "Roorkee",
  "Muzaffarpur",
  "Bhopal",
  "Nagpur",
  "Kanpur",
  "Agra",
  "Lucknow",
];

function CultNavbar() {
  return (
    <Box pos='sticky' top='0' zIndex='300'>
      <Flex
      gap='3'
      className={styles.main}>
      
      <Image
        height="35px"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
      ></Image>
      
      <Hide below="md" >
      <Box className={styles.textBox}>
        <Text className={styles.Text}>FITNESS</Text>
        <Text className={styles.Text}>CARE</Text>
        <Text className={styles.Text}>MIND</Text>
        <Text className={styles.Text}>STORE</Text>
      </Box>
      </Hide>


      <Box className={styles.iconBox}>
<Hide below='sm'>
        <Menu >
          <MenuButton
            style={{ backgroundColor: "transparent", color: "#879ca6" }}
            as={Button}
            rightIcon={<GoLocation color="#e8e8e9" size="23" />}
          >
            INDORE
          </MenuButton>
          <MenuList
            style={{
              backgroundColor: "#171a26",
              height: "450px",
              width: "360px",
              overflowY: "scroll",
              // backdropFilter: "-moz-initial"
            }}
            // zIndex = '100'
          >
            <InputGroup
              style={{
                width: "300px",
                marginLeft: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch color="white" />}
              />
              <Input color="white" type="text" placeholder="Search your city" />
            </InputGroup>
            <MenuGroup  title="Popular Cities" className={styles.menuItemColor}>
              <MenuDivider marginLeft="15px" marginRight="15px" />
              <MenuItem minH="48px" className={styles.menuItemColor}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/e_replace_color:white,o_60//image/cities/blr_new.png"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span className={styles.menuItemColor}>Banglore</span>
              </MenuItem>
              <MenuItem minH="48px" className={styles.menuItemColor}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/e_replace_color:white,o_60//image/cities/ncr_new.png"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span className={styles.menuItemColor}>Delhi NCR</span>
              </MenuItem>
              <MenuItem minH="48px" className={styles.menuItemColor}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/e_replace_color:white,o_60//image/cities/hyd_new.png"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span className={styles.menuItemColor}>Hyderabad</span>
              </MenuItem>
              <MenuItem minH="48px" className={styles.menuItemColor}>
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/e_replace_color:white,o_60//image/cities/mumbai_selected.png"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span className={styles.menuItemColor}>Mumbai</span>
              </MenuItem>
            </MenuGroup>

            <MenuGroup title="Others" className={styles.menuItemColor}>
              <MenuDivider marginLeft="15px" marginRight="15px" />
            </MenuGroup>
            {data.map((e) => {
              return (
                <MenuItem
                  style={{
                    color: "#b9babc",
                    marginBottom: "10px",
                    fontWeight: "Bold",
                  }}
                >
                  {e}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>

        <Button          
            backgroundColor= "transparent"
                     border= "2px solid white"
                      color= "#f1fafe"
          
        >
          GET APP
        </Button>
        </Hide>
        <BsFillPersonFill
          style={{
            color: "#e8e8e9",
            height: "40px",
            width: "26px",
            marginRight: "20px",
            marginLeft: "20px"  }}
        />
        <AiOutlineShoppingCart
          style={{ color: "#e8e8e9", height: "40px", width: "26px",marginRight: "20px" }}
        />

      
           <Show below="md" > 
<Menu  >
  <MenuButton
    as={IconButton}
    border='1px solid white'
    color='white'
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='ghost'
    _hover={{bg:'whiteAlpha.400'}}

  />
  <MenuList>
    <MenuItem icon={<AddIcon />} >
      FITNESS
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} >
      CARE
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} >
      MIND
    </MenuItem>
    <MenuItem icon={<EditIcon />} >
      STORE
    </MenuItem>
  </MenuList>
</Menu>
           </Show>

    </Box>

    </Flex>
  
    </Box>
  );
}

export default CultNavbar;

