import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import StoreHome from '../Components/CultStore/CultStoreHome/StoreHome';
export const PrivateRoute = () => {
  const {isAuth} = useSelector((store)=>store.auth);
  // console.log(isAuth);
}
