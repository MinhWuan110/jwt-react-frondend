import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"

function User() {
  
  const navigate = useNavigate();

    // kiểm tra người dùng nào đã đăng nhập rồi nêú chưa đăng nhập thì đá ra trang login 
    useEffect(()=>{
    let session = sessionStorage.getItem('account');
    if(!session){
       navigate("/login");
    }
  },[])
  return (
     <MainLayout>
      <h1> đây là trang user</h1>
      <h2>minh quan </h2>
    </MainLayout>
  )
}

export default User