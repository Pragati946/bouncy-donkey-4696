import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
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
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Auth/Auth.action";
const Logout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };

  return (
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
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEH5ZaKCdg4JQ/profile-displayphoto-shrink_100_100/0/1652277771819?e=1673481600&v=beta&t=tDxMSAwyH2aLOX3lrL4z3DtMtYl-I8ENs1HYN3-tJWw"
          size="md"
        />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          w={{ base: "310px", sm: "340px", md: "360px", lg: "420px" }}
          bgColor="black"
        >
          <ModalCloseButton _hover={{ color: "white" }} />
          <ModalBody w="full" m="auto" mt="20">
            <VStack px={{ base: "0", md: "2", lg: "10" }}>
              <Box alignItems="center">
                <Image
                  w="80px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
                  mb="20px"
                />
                <Image
                  w="90px"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png"
                />
              </Box>
              <HStack
                borderBottom="2px solid black"
                w="full"
                pt="25px"
              ></HStack>
              <Button
                bgColor="white"
                w="full"
                size="sm"
                mt="5"
                type="submit"
                _hover={{ bgColor: "white" }}
                onClick={handlelogout}
                marginBottom="200px"
              >
                <Text
                  letterSpacing={"1.2px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="black"
                >
                  Wants to Logout
                </Text>
              </Button>
              <br />
              <br />
              <br />
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Logout;
