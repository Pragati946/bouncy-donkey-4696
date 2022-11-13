import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  MenuDivider,
  MenuGroup,
  Show,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./CultNavbar.module.css";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Login } from "../../../Pages/Authentication/Login";
import { useSelector } from "react-redux";
import Logout from "../../../Pages/Authentication/Logout";
import Cart from "../../../Pages/CultStore/Cart";

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
  const { isAuth } = useSelector((store) => store.auth);

  return (
    <>
      <Box pos="sticky" top="0" zIndex="300">
        <Flex gap="3" className={styles.main}>
          <Link to="/">
            <Image
              mr="5vw"
              height="45px"
              mixBlendMode="difference"
              src="https://play-lh.googleusercontent.com/DQ6S6FjOtoy5o4fGZInmjM7iTkwP-KsMDoaezm4n2g0akg0SvtI6NFbZ3ntxVeR6Yas"
            ></Image>
          </Link>

          <Hide below="md">
            <Box className={styles.textBox}>
              <Link to="/fitness">
                <Text mr="5vw" className={styles.Text}>
                  FITNESS
                </Text>{" "}
              </Link>

              <Link to="/care">
                <Text mr="5vw" className={styles.Text}>
                  CARE
                </Text>
              </Link>
              <Link to="/mind">
                <Text mr="5vw" className={styles.Text}>
                  MIND
                </Text>
              </Link>
              <Link to="/store">
                <Text className={styles.Text}>STORE</Text>
              </Link>
            </Box>
          </Hide>

          <Box className={styles.iconBox}>
            <Hide below="sm">
              <Menu>
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
                    <Input
                      color="white"
                      type="text"
                      placeholder="Search your city"
                    />
                  </InputGroup>
                  <MenuGroup
                    title="Popular Cities"
                    className={styles.menuItemColor}
                  >
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
                backgroundColor="transparent"
                border="2px solid white"
                color="#f1fafe"
              >
                GET APP
              </Button>
            </Hide>

            <HStack
              ml="4"
            borderRadius="50%"
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              spacing={3}
              bg="white"
            >
              {!isAuth ? <Login /> : <Logout />}
             
            </HStack>

            <Show below="md">
              <Menu>
                <MenuButton
                  as={IconButton}
                  border="1px solid white"
                  color="white"
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="ghost"
                  _hover={{ bg: "whiteAlpha.400" }}
                />
                <MenuList>
                  <Link to="/fitness">
                    <MenuItem icon={<AddIcon />}>
                      <Text className={styles.Text}>FITNESS</Text>
                    </MenuItem>
                  </Link>

                  <Link to="/care">
                    <MenuItem icon={<ExternalLinkIcon />}>
                      <Text className={styles.Text}>CARE</Text>
                    </MenuItem>
                  </Link>

                  <Link to="/mind">
                    <MenuItem icon={<RepeatIcon />}>
                      <Text className={styles.Text}>MIND</Text>
                    </MenuItem>
                  </Link>

                  <Link to="/store">
                    <MenuItem icon={<EditIcon />}>
                      <Text className={styles.Text}>STORE</Text>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Show>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default CultNavbar;
