import React from "react";
import Container from "../Container";
import Grid from "../Grid";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

const ContactUs = () => {
  return (
    <>
      <div className="bg-bgColor py-14">
        <Container>
          <div className="mb-10">
            <h2 className="font-primaryFont font-bold text-3xl text-textColor">
              Contact Us
            </h2>
            <p className="font-primaryFont text-base lg:w-2/5">
              This is our service section. Har we are discus our course module.
            </p>
          </div>
          <Grid className="gap-5 grid-cols-5">
            <div className="col-span-2">
              <div>
                <TextField
                  fullWidth
                  label="Name"
                  placeholder="Full name"
                  id="fullWidth"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="Phone number"
                  id="fullWidth"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Email Address"
                  id="fullWidth"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  placeholder="subject"
                  id="fullWidth"
                  margin="dense"
                />
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Message"
                  placeholder="Message..."
                  multiline
                  margin="dense"
                />
                <button className="font-primaryFont text-base px-8 py-3 bg-btnBg text-bgColor rounded-md mt-4">
                  Submit
                </button>
              </div>
            </div>
            <div className="col-span-3 h-[400px]">
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
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
