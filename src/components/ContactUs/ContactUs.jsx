"use client";
import React from "react";
import Container from "../Container";
import Grid from "../Grid";
import Flex from "../Flex/Flex";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ContactUsData } from "./ContactUsData";

const theme = createTheme({
  palette: {
    white: {
      main: "#ffffff",
    },
    btnBg: {
      main: "#FC6736",
    },
  },
});

const ContactUs = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="bg-bgColor py-14">
          <Container>
            <div className="mb-10">
              <h2 className="font-primaryFont font-bold text-3xl text-textColor">
                Contact Us
              </h2>
              <p className="font-primaryFont text-base lg:w-2/5">
                This is our service section. Har we are discus our course
                module.
              </p>
            </div>
            <Grid className="gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <Grid className="mt-10 grid-cols-1 gap-6">
                  {ContactUsData.map((item, i) => (
                    <Flex className=" items-center" key={i}>
                      <Flex className="w-14 h-14 md:w-16 md:h-16 mr-2 rounded-md bg-btnBg justify-center items-center">
                        {item.icon}
                      </Flex>
                      <div>
                        <p className="font-primaryFont text-base text-textColor max-w-80">
                          {item.text}
                        </p>
                        <p className="font-primaryFont text-base text-textColor max-w-80">
                          {item.text2}
                        </p>
                      </div>
                    </Flex>
                  ))}
                </Grid>
              </div>
              <div className="lg:col-span-3">
                <div className="w-full h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.119642853471!2d88.46786877427348!3d26.02964109748376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c0033b605f4b%3A0xac895c90bde95cd2!2sThakurgaon%20Circuit%20House!5e0!3m2!1sen!2sbd!4v1712690370642!5m2!1sen!2sbd"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Grid>
          </Container>
        </div>
      </ThemeProvider>
    </>
  );
};

export default ContactUs;
