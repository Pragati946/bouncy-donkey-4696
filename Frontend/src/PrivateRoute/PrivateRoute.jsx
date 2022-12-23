import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.auth);
  // console.log(isAuth);
  const toast = useToast();

  if (!isAuth) {
    toast({
      title: "Please Login First.",
      description: "To access this page",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    return <Navigate to="/" />;
  }
  return children;
};
