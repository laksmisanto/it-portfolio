"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { GalleryData } from "./GalleryData";
import { motion } from "framer-motion";
import Grid from "../Grid";

const Gallery = () => {
  let count = 0;
  return (
    <>
      <div className="bg-bgColor py-14">
        <Container>
          <div className="mb-10">
            <h2 className="font-primaryFont font-bold text-3xl text-textColor">
              Gallery
            </h2>
            <p className="font-primaryFont text-base  lg:w-2/5">
              This is our service section. Har we are discus our course module.
            </p>
          </div>
          <Grid className="gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-wrap">
            {GalleryData.map(
              (item, i) => (
                (count = count + 0.2),
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
                    key={i}
                  >
                    <Image
                      src={item.img}
                      alt="Gallery Image"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
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

export default Gallery;
