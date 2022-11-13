import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Auth/Auth.action";
export const Login = () => {
  const [loginCred, setLoginCred] = useState({});
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCred({ ...loginCred, [name]: value });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginCred));
  };
  return (
    <>
      <Box>
        <Button
          as={"a"}
          fontSize={"lg"}
          fontWeight={200}
          variant={"link"}
          href={"#"}
          color="black"
          onClick={onOpen}
        >
          <BiUserCircle fontSize={"35px"} />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            w={{ base: "310px", sm: "340px", md: "360px", lg: "420px" }}
          >
            <ModalCloseButton _hover={{ bgColor: "none" }} />
            <ModalBody w="full" m="auto" mt="20">
              <VStack px={{ base: "0", md: "2", lg: "10" }}>
                <Flex justifyContent={"center"} alignItems="center">
                  <Image
                    w="120px"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
                  />
                </Flex>
                <form onSubmit={handleSubmit}>
                  <HStack borderBottom={"2px solid gray"} w="full" pt="40px">
                    <span>
                      <Input
                        fontWeight={"600"}
                        type="text"
                        placeholder="email"
                        onChange={handleChange}
                        name="email"
                        outline="none"
                        border={"none"}
                        focusBorderColor="none"
                        _placeholder={{
                          opacity: 0.4,
                          color: "gray",
                          letterSpacing: "0",
                        }}
                        onFocus={{ border: "0" }}
                      />
                      <Input
                        fontWeight={"600"}
                        type="password"
                        placeholder="password"
                        onChange={handleChange}
                        name="password"
                        outline="none"
                        border={"none"}
                        focusBorderColor="none"
                        _placeholder={{
                          opacity: 0.4,
                          color: "gray",
                          letterSpacing: "0",
                        }}
                        onFocus={{ border: "0" }}
                      />
                    </span>
                  </HStack>
                  <br />
                  <Button
                    bgColor="rgba(255, 49, 109, 0.7)"
                    w="full"
                    size="sm"
                    mt="5"
                    type="submit"
                    _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                    onClick={onClose}
                  >
                    <Text
                      letterSpacing={"1.2px"}
                      fontWeight="500"
                      fontSize="14px"
                      color="white"
                    >
                      CONTINUE
                    </Text>
                  </Button>
                </form>
                <br />
                <br />
                <Flex textAlign={"center"}>
                  <Heading
                    fontSize={"13px"}
                    fontWeight="500"
                    letterSpacing={".5px"}
                    lineHeight="5"
                  >
                    * By Continuing you agree to the
                    <span style={{ color: "rgba(255, 49, 109, 0.7)" }}>
                      Terms of Services
                    </span>
                    and
                    <span style={{ color: "rgba(255, 49, 109, 0.7)" }}>
                      Privacy policy.
                    </span>
                  </Heading>
                </Flex>
                <br />
                <br />
                <br />
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
