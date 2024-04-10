import React from "react";
import Container from "../Container";
import Flex from "../Flex/Flex";
import Image from "next/image";
import BannerImg from "../../assets/BannerImage.webp";
import NavLink from "../NavLink/NavLink";

const Banner = () => {
  return (
    <>
      <div className="bg-bgColor">
        <Container>
          <Flex className="justify-between items-center py-8 flex-wrap">
            <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
              <h2 className="font-primaryFont font-bold text-2xl lg:text-5xl xxl:text-6xl text-textColor mb-1 sm:mb-3">
                Graphics & Web Design
              </h2>
              <p className="font-primaryFont text-textColor text-sm tracking-wider mb-5">
                Your Best Chose, Our Best Service
              </p>
              <p className="font-primaryFont text-textColor text-base text-center md:text-left w-full lg:w-10/12">
                With a vision to turn manpower into assets, Creative IT
                Institute is ready to enhance your learning experience with
                skilled mentors and updated curriculum. Pick your desired course
                from more than 30 trendy options.
              </p>
              <div className="text-center sm:text-start">
                <NavLink href="pages/contact">Contact Us</NavLink>
              </div>
            </div>
            <div className="w-full sm:w-2/5 ">
              <Image
                src={BannerImg}
                width={800}
                height={800}
                loading="lazy"
                alt="Banner Image"
                className="w-full h-full object-cover"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
