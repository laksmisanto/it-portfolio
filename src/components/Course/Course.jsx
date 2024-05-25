"use client";
import React from "react";
import Container from "../Container";
import { motion } from "framer-motion";
import Grid from "../Grid";
import { AllCourseData } from "./AllCourseData";
import CourseItem from "./CourseItem";

const Course = () => {
  let count = 0;
  return (
    <div className="bg-bgColor py-14">
      <Container>
        <div className="mb-10">
          <h2 className="font-primaryFont font-bold text-3xl text-textColor">
            All Course
          </h2>
          <p className="font-primaryFont text-base lg:w-2/5">
            This is our service section. Har we are discus our course module.
          </p>
        </div>

        <Grid className="gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 flex-wrap">
          {AllCourseData.map(
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
                  key={i}
                >
                  <CourseItem
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    status={item.status}
                    discountLink={item.discountLink}
                    courseDetailsLink={item.courseDetailsLink}
                  />
                </motion.div>
              )
            )
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Course;
