"use client";
import React from "react";
import Container from "../Container";
import { ServiceData } from "./ServiceData";
import Grid from "../Grid";
import { motion } from "framer-motion";

const OurService = () => {
  let count = 0;
  return (
    <>
      <div className="bg-bgColor py-14">
        <Container>
          <div className="mb-10">
            <h2 className="font-primaryFont font-bold text-3xl text-textColor">
              Our Service
            </h2>
            <p className="font-primaryFont text-base max-w-fit lg:w-2/5">
              This is our service section. Har we are discus our course module.
            </p>
          </div>
          <Grid className="gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 flex-wrap">
            {ServiceData.map(
              (item, i) => (
                (count = count + 0.25),
                (
                  <motion.div
                    initial={{ x: 20, y: 20, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: `${count}`,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="shadow-xl p-4 rounded-xl text-center"
                    key={i}
                  >
                    <i className="inline-block w-12 h-12">{item.icon}</i>
                    <h4 className="font-primaryFont font-bold text-xl text-textColor pb-2">
                      {item.name}
                    </h4>
                    <p className="font-primaryFont text-base text-textColor">
                      {item.description}
                    </p>
                  </motion.div>
                )
              )
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default OurService;
