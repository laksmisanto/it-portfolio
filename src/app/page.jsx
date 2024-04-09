import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery/Gallery";
import Layout from "@/components/Layout";
import Course from "@/components/Course/Course";
import OurService from "@/components/OurService/OurService";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Course />
        <OurService />
        <Gallery />
        <ContactUs />
      </Layout>
    </>
  );
}
