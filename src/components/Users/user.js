import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import useAuthCheck from '../useAuthCheck'

function User() {

  // gọi hàm kiểm tra phiên đăng nhập 
  useAuthCheck()
  
  return (
     <MainLayout>
      <h1> đây là trang user</h1>
      <h2>minh quan </h2>
    </MainLayout>
  )
}

export default User