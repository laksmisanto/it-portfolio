import Container from "@/components/Container";
import React from "react";
import TextField from "@mui/material/TextField";
import Flex from "@/components/Flex/Flex";

const page = () => {
  return (
    <>
      <div className="bg-bgColor">
        <Container>
          <Flex className="w-full h-screen justify-center items-center">
            <div className="mx-auto w-2/5 p-5 shadow-xl rounded-xl border border-borderColor">
              <div className="text-center mb-5">
                <h2 className="font-primaryFont font-bold text-2xl text-textColor">
                  Give valid information
                </h2>
                <p className="font-primaryFont text-base text-textColor">
                  After fill-up form our team contact you
                </p>
              </div>
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
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default page;
