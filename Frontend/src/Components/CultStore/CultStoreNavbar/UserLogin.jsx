import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  HStack,
  Image,
  Box,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

function UserLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
              <HStack borderBottom={"2px solid gray"} w="full" pt="40px">
                <Text fontWeight={"600"} fontSize="17px">
                  +91
                </Text>
                <span>
                  <Input
                    fontWeight={"600"}
                    letterSpacing="8px"
                    type="number"
                    outline="none"
                    border={"none"}
                    focusBorderColor="none"
                    placeholder="Enter your phone number"
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
                _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
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
              <br />
              <br />
              <HStack w="full">
                <Box
                  borderBottom={"2px solid rgb(224,224,224)"}
                  w="130px"
                ></Box>
                <Text color="rgb(200,200,200)" fontWeight={"500"}>
                  OR
                </Text>
                <Box
                  w="130px"
                  borderBottom={"2px solid rgb(224,224,224)"}
                ></Box>
              </HStack>
              <br />
              <HStack gap="2" py="3">
                <FcGoogle fontSize={"28px"} />
                <SiFacebook fontSize={"28px"} color="#4267B2" />
              </HStack>
              <br />
              <Flex textAlign={"center"}>
                <Heading
                  fontSize={"13px"}
                  fontWeight="500"
                  letterSpacing={".5px"}
                  lineHeight="5"
                >
                  * By Continuing you agree to the{" "}
                  <span style={{ color: "rgba(255, 49, 109, 0.7)" }}>
                    {" "}
                    Terms of Services{" "}
                  </span>
                  and{" "}
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
    </>
  );
}

export default UserLogin;
