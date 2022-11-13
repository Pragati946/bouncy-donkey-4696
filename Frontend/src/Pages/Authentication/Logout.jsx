import {
  Avatar,
  Box,
  Button,
  Flex,
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Auth.action";
import { LOGOUT } from "../../Redux/Auth/Auth.types";
const Logout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };

  return (
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
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQEH5ZaKCdg4JQ/profile-displayphoto-shrink_100_100/0/1652277771819?e=1673481600&v=beta&t=tDxMSAwyH2aLOX3lrL4z3DtMtYl-I8ENs1HYN3-tJWw"
          size="md"
        />
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
              <HStack
                borderBottom={"2px solid white"}
                w="full"
                pt="25px"
              ></HStack>
              <Button
                bgColor="rgba(255, 49, 109, 0.7)"
                w="full"
                size="sm"
                mt="5"
                type="submit"
                _hover={{ bgColor: "rgba(255, 49, 109, 0.7)" }}
                onClick={handlelogout}
                marginBottom="200px"
              >
                <Text
                  letterSpacing={"1.2px"}
                  fontWeight="500"
                  fontSize="14px"
                  color="white"
                >
                  Wants to Logout
                </Text>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Logout;
