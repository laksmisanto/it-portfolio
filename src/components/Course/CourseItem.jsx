"use client";
import Link from "next/link";
import Image from "next/image";
import Flex from "../Flex/Flex";

const CourseItem = ({
  img,
  name,
  price,
  status,
  discountLink,
  courseDetailsLink,
}) => {
  return (
    <>
      <div className="shadow rounded-xl">
        <Image
          src={img}
          width={400}
          height={400}
          alt="Course Image"
          className="w-full object-cover rounded-t-xl"
        />
        <div className="p-5">
          <h3 className="font-primaryFont font-bold text-xl text-textColor">
            {name}
          </h3>
          <p className="font-primaryFont text-base text-textColor">
            Course Price : {price}
          </p>
          <p className="font-primaryFont text-base text-textColor">{status}</p>
          <Flex className="flex-row flex-wrap justify-between mt-4 text-center">
            <Link
              href={discountLink}
              className="font-primaryFont text-base text-bgColor bg-btnBg border border-btnBg rounded ease-linear duration-200 hover:text-btnBg hover:bg-bgColor px-4 py-2 w-full sm:w-auto"
            >
              Click for Discount
            </Link>
            <Link
              href={courseDetailsLink}
              className="font-primaryFont text-base text-bgColor bg-btnBg border border-btnBg rounded ease-linear duration-200 hover:text-btnBg hover:bg-bgColor px-4 py-2 w-full sm:w-auto mt-3 sm:mt-0"
            >
              Course Details
            </Link>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
