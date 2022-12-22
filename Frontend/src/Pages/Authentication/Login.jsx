import {
  Box,
  Button,
  color,
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
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Auth/Auth.action";
export const Login = () => {
  const [loginCred, setLoginCred] = useState({});
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
          as="a"
          fontSize="lg"
          fontWeight={200}
          variant="link"
          href={"#"}
          color="black"
          onClick={onOpen}
        >
          <BiUserCircle fontSize="35px" />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            w={{ base: "310px", sm: "340px", md: "360px", lg: "420px" }}
            bgColor="black"
          >
            <ModalCloseButton _hover={{ bgColor: "none", color: "white" }} />
            <ModalBody w="full" m="auto" mt="20" bgColor="black">
              <Box margin="auto" border="2px solid black" w="100px">
                <Image
                  w="80px"
                  mb="20px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
                />
                <Image
                  w="90px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png"
                />
              </Box>
              <VStack px={{ base: "0", md: "2", lg: "10" }}>
                <form onSubmit={handleSubmit}>
                  <HStack borderBottom="2px solid gray" w="full" pt="40px">
                    <span>
                      <Input
                        fontWeight="600"
                        type="email"
                        placeholder="eve.holt@reqres.in"
                        onChange={handleChange}
                        name="email"
                        outline="none"
                        border="none"
                        focusBorderColor="none"
                        _placeholder={{
                          opacity: 0.4,
                          color: "white",
                          letterSpacing: "0",
                        }}
                        onFocus={{ border: "0" }}
                      />
                      <Input
                        fontWeight="600"
                        type="password"
                        placeholder="citySlicka"
                        onChange={handleChange}
                        name="password"
                        outline="none"
                        border="none"
                        focusBorderColor="none"
                        _placeholder={{
                          opacity: 0.4,
                          color: "white",
                          letterSpacing: "0",
                        }}
                        onFocus={{ border: "0" }}
                      />
                    </span>
                  </HStack>
                  <br />
                  <Button
                    bgColor="white"
                    w="full"
                    size="sm"
                    mt="5"
                    type="submit"
                    _hover={{ bgColor: "white" }}
                    onClick={onClose}
                  >
                    <Text
                      letterSpacing="1.2px"
                      fontWeight="500"
                      fontSize="14px"
                      color="black"
                    >
                      CONTINUE
                    </Text>
                  </Button>
                </form>
                <br />
                <br />
                <Flex textAlign="center">
                  <Heading
                    fontSize="13px"
                    fontWeight="500"
                    letterSpacing=".5px"
                    lineHeight="5"
                    color="white"
                  >
                    * By Continuing you agree to the Terms of Services and
                    Privacy policy.
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
