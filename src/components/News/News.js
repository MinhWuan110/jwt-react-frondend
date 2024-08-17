import React from 'react'
import MainLayout from '../Layouts/MainLayout'
import useAuthCheck from '../useAuthCheck'
function News() {
  // kiểm tra người dùng nào đã đăng nhập rồi nêú chưa đăng nhập thì đá ra trang login
  useAuthCheck()
  return (
    <MainLayout>
        <h1>here is bage news </h1>
    </MainLayout>
  )
}

export default News