"use client";
import React from "react";
import Menubar from "../Menubar";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
