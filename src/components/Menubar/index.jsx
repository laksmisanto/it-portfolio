import React from "react";
import Container from "../Container";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { MenuData } from "./MenuData";
import Grid from "../Grid";
import Flex from "../Flex/Flex";

const Menubar = () => {
  return (
    <>
      <div className="bg-white shadow">
        <Container>
          <Flex className="justify-center items-center">
            <div className="w-1/5">
              <span className="font-primaryFont text-xl font-bold text-btnBg">
                LaksmiSanto
              </span>
            </div>
            <nav className="w-4/5">
              <List className="flex justify-end">
                {MenuData.map((item, i) => (
                  <ListItem
                    href={item.link}
                    key={i}
                    className="font-primaryFont text-base text-textColor mx-2 my-2 last:mr-0"
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
