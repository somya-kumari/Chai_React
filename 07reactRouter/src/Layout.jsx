import React from "react"
import Header from "./Component/Header/header";
import Footer from "./Component/Footer/footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout;
