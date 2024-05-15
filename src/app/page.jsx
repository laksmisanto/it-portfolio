"use client";
import Layout from "@/components/Layout";
import Homepage from "./pages/home/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Form from "./pages/form/page";
import GraphicsDesign from "./pages/graphics-design/GraphicsDesign";
import OurService from "@/components/OurService/OurService";
import Gallery from "@/components/Gallery/Gallery";
import ContactUs from "@/components/ContactUs/ContactUs";
import UxuiDesignPage from "./pages/uxui-design/UxuiDesignPage";
import WebDesignPage from "./pages/web-design/WebDesignPage";

export default function Home() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="pages/contact" element={<Contact />} />
          <Route path="pages/form" element={<Form />} />
          <Route path="pages/graphics-design" element={<GraphicsDesign />} />
          <Route path="pages/our-service" element={<OurService />} />
          <Route path="pages/gallery" element={<Gallery />} />
          <Route path="pages/about" element={<ContactUs />} />
          <Route path="pages/uxui-design" element={<UxuiDesignPage />} />
          <Route path="pages/web-design" element={<WebDesignPage />} />
        </Route>
      </Routes>
    </>
  );
}
