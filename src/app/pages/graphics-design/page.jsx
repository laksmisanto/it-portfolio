import Container from "@/components/Container";
import Flex from "@/components/Flex/Flex";
import Grid from "@/components/Grid";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerImage from "../../../assets/BannerImage.webp";
import {
  CourseCurriculumData,
  CourseDesignFor,
  CourseJobPositionsData,
  CourseRequirementsData,
  SoftwareCourseData,
} from "./GraphicsCourseData";

const page = () => {
  return (
    <>
      <div className="bg-bgColor py-10 ">
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-primaryFont font-bold text-3xl text-textColor pb-3">
                Graphics Design Course Details
              </h2>
              <p className="font-primaryFont text-base text-textColor">
                Considering the growing demand for visual content, marketers are
                promoting their products through graphical ideas nowadays. The
                increasing need for graphic designers has unlocked many
                opportunities for the people who prefer working independently. A
                study shows, all the companies prioritize their visual
                acceptance, even a small company spends up to 500 dollars to
                create a perfect logo. If you are passionate about making
                designs, this updated Graphic Design course is for you.
              </p>
              <Flex className="my-8 gap-4 flex-wrap">
                <Flex className="px-6 py-2 flex-col border-2 border-btnBg rounded-lg justify-center items-center">
                  <p className="font-primaryFont text-base text-textColor">
                    Duration
                  </p>
                  <h4 className="font-primaryFont font-bold text-2xl text-textColor">
                    6 Month
                  </h4>
                </Flex>
                <Flex className="px-6 py-2 flex-col border-2 border-btnBg rounded-lg justify-center items-center">
                  <p className="font-primaryFont text-base text-textColor">
                    Lectures
                  </p>
                  <h4 className="font-primaryFont font-bold text-2xl text-textColor">
                    48+
                  </h4>
                </Flex>
                <Flex className="px-6 py-2 flex-col border-2 border-btnBg rounded-lg justify-center items-center">
                  <p className="font-primaryFont text-base text-textColor">
                    Projects
                  </p>
                  <h4 className="font-primaryFont font-bold text-2xl text-textColor">
                    30+
                  </h4>
                </Flex>
              </Flex>
              <Link
                href="pages/form"
                className="font-primaryFont text-base text-bgColor px-4 py-2 bg-btnBg border border-btnBg rounded hover:bg-bgColor hover:text-btnBg duration-150 ease-linear mt-2 mb-4 inline-block"
              >
                Admission
              </Link>

              <div className="mt-4">
                <h4 className="font-primaryFont font-bold text-xl text-textColor mb-4">
                  Softwares Youll Learn
                </h4>
                {SoftwareCourseData.map((item, i) => (
                  <Flex className="items-center my-1" key={i}>
                    <div className="h-4 w-4 mr-2 bg-btnBg rounded-full shadow after:w-2 after:h-2 after:bg-bgColor after:absolute after:translate-x-2/4 after:translate-y-2/4 after:rounded-full after:shadow"></div>
                    <p className="font-primaryFont text-base text-textColor">
                      {item.name}
                    </p>
                  </Flex>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-primaryFont font-bold text-xl text-textColor mb-4">
                  Course Curriculum
                </h4>
                <Grid className="grid-cols-1 sm:grid-cols-2">
                  {CourseCurriculumData.map((item, i) => (
                    <Flex className="items-center my-1" key={i}>
                      <div className="h-4 w-4 mr-2 bg-btnBg rounded-full shadow after:w-2 after:h-2 after:bg-bgColor after:absolute after:translate-x-2/4 after:translate-y-2/4 after:rounded-full after:shadow"></div>
                      <p className="font-primaryFont text-base text-textColor">
                        {item.name}
                      </p>
                    </Flex>
                  ))}
                </Grid>
              </div>
              <div className="mt-4">
                <h4 className="font-primaryFont font-bold text-xl text-textColor mb-4">
                  Course requirements
                </h4>

                {CourseRequirementsData.map((item, i) => (
                  <Flex className="items-center my-1" key={i}>
                    <div className="h-4 w-4 mr-2 bg-btnBg rounded-full shadow after:w-2 after:h-2 after:bg-bgColor after:absolute after:translate-x-2/4 after:translate-y-2/4 after:rounded-full after:shadow"></div>
                    <p className="font-primaryFont text-base text-textColor">
                      {item.name}
                    </p>
                  </Flex>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-primaryFont font-bold text-xl text-textColor mb-4">
                  Open Job Positions
                </h4>

                {CourseJobPositionsData.map((item, i) => (
                  <Flex className="items-center my-1" key={i}>
                    <div className="h-4 w-4 mr-2 bg-btnBg rounded-full shadow after:w-2 after:h-2 after:bg-bgColor after:absolute after:translate-x-2/4 after:translate-y-2/4 after:rounded-full after:shadow"></div>
                    <p className="font-primaryFont text-base text-textColor">
                      {item.name}
                    </p>
                  </Flex>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="font-primaryFont font-bold text-xl text-textColor mb-4">
                  This Course is Designed for
                </h4>

                {CourseDesignFor.map((item, i) => (
                  <Flex className="items-center my-1" key={i}>
                    <div className="h-4 w-4 mr-2 bg-btnBg rounded-full shadow after:w-2 after:h-2 after:bg-bgColor after:absolute after:translate-x-2/4 after:translate-y-2/4 after:rounded-full after:shadow"></div>
                    <p className="font-primaryFont text-base text-textColor">
                      {item.name}
                    </p>
                  </Flex>
                ))}
              </div>
            </div>
            <div>
              <Image
                src={BannerImage}
                alt="Course Image"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default page;
