"use client";
import React from "react";
import Grid from "../Grid";
import Container from "../Container";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { MenuData } from "../Menubar/MenuData";
import Flex from "../Flex/Flex";
import { FooterData } from "./FooterData";

const Footer = () => {
  return (
    <>
      <div className="bg-bgColor pt-14 pb-5">
        <Container>
          <Grid className="gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-0 box-border">
            <div className="">
              <a
                href="/"
                className="font-primaryFont font-bold text-xl text-textColor mb-5"
              >
                Your Logo
              </a>
              <p className="font-primaryFont text-base text-textColor mt-5">
                Your about page can and will be more comprehensive than a single
                mission statement. However, to draw people in, you need to
                succinctly state your goal in the industry up front.
              </p>
            </div>

            <div>
              <h4 className="font-primaryFont font-bold text-xl text-textColor mb-5">
                Menu
              </h4>
              <List>
                {MenuData.map((item, i) => (
                  <ListItem
                    href={item.link}
                    key={i}
                    className="font-primaryFont text-base text-textColor hover:text-btnBg duration-150 ease-linear cursor-pointer my-2 first:mb-0 last:mb-0"
                  >
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </div>
            <div>
              <h4 className="font-primaryFont font-bold text-xl text-textColor mb-5">
                Extra Link
              </h4>
            </div>
            <div>
              <h4 className="font-primaryFont font-bold text-xl text-textColor mb-5">
                Connect with us
              </h4>
              <div>
                <Flex className="w-full box-border">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full font-primaryFont text-sm text-textColor outline-none border border-btnBg px-2 rounded-l-xl box-border"
                  />
                  <button
                    type="button"
                    className="font-primaryFont text-base h-full px-4 py-2 bg-btnBg text-bgColor border border-btnBg rounded-r-xl box-border"
                  >
                    Submit
                  </button>
                </Flex>
              </div>
              <List className="flex mt-6">
                {FooterData.map((item, i) => (
                  <ListItem
                    href={item.url}
                    key={i}
                    className="border border-btnBg flex justify-center items-center w-10 h-10 p-2 mx-1 rounded-lg hover:shadow-xl hover:bg-textColor hover:border-textColor duration-150 ease-linear"
                  >
                    <i>{item.icon}</i>
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
        </Container>
      </div>
      <div className="bg-btnBg py-2">
        <Container>
          <p className="font-primaryFont text-xs text-[white] text-center ">
            Copyright © 2024 ls Santo
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
