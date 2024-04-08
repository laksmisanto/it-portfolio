import React from "react";
import Container from "../Container";
import Image from "next/image";
import graphicsDesign from "../../assets/graphicsDesign.webp";
import Flex from "../Flex/Flex";
import NavLink from "../NavLink/NavLink";

const OurService = () => {
  return (
    <div className="bg-bgColor py-20">
      <Container>
        <div className="mb-10">
          <h2 className="font-primaryFont font-bold text-3xl text-textColor">
            Our Service
          </h2>
          <p className="font-primaryFont text-base">
            This is our service section . Har we are discus our course module.{" "}
          </p>
        </div>
        <Flex>
          <div className="w-1/3 shadow">
            <Image
              src={graphicsDesign}
              width={400}
              height={400}
              alt="Course Image"
              className="w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-primaryFont font-bold text-xl text-textColor">
                Professional Graphics Design
              </h3>
              <p className="font-primaryFont text-base text-textColor">
                Course Price : 7,0000/-
              </p>
              <p className="font-primaryFont text-base text-textColor">
                Online & Offline Course Available
              </p>
              <Flex className="justify-between">
                <NavLink href="/">Click for Discount</NavLink>
                <NavLink href="/">Corse Details</NavLink>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default OurService;
