"use client";
import Banner from "@/components/Banner";
import Course from "@/components/Course/Course";
import OurService from "@/components/OurService/OurService";
import Gallery from "@/components/Gallery/Gallery";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Banner />
      <Course />
      <OurService />
      <Gallery />
      <ContactUs />
    </>
  );
}
