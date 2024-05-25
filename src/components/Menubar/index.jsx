import React from "react";
import Container from "../Container";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { MenuData } from "./MenuData";
import Flex from "../Flex/Flex";
import Link from "next/link";

const Menubar = () => {
  return (
    <>
      <div className="bg-white shadow">
        <Container>
          <Flex className="justify-center items-center py-4">
            <div className="w-1/5">
              <span className="font-primaryFont text-xl font-bold text-btnBg">
                <Link href="/">Santo</Link>
              </span>
            </div>
            <nav className="w-4/5 hidden md:block">
              <List className="flex justify-end">
                {MenuData.map((item, i) => (
                  <ListItem
                    href={item.link}
                    key={i}
                    className="font-primaryFont text-base text-textColor mx-2 last:mr-0 hover:text-btnBg hover:tracking-wide ease-linear duration-200 "
                  >
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </nav>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Menubar;
