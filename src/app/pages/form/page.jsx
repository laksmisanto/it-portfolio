"use client";
import Container from "@/components/Container";
import TextField from "@mui/material/TextField";
import Flex from "@/components/Flex/Flex";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const page = () => {
  // const [course, setCourse] = useState();

  // const handleChange = (event) => {
  //   setCourse(event.target.value);
  // };
  // console.log(course);
  return (
    <>
      <div className="bg-bgColor">
        <Container>
          <Flex className="w-full h-screen justify-center items-center">
            <div className="mx-auto w-full lg:w-2/5 p-5 shadow-xl rounded-xl border border-borderColor">
              <div className="text-center mb-5">
                <h2 className="font-primaryFont font-bold text-xl md:text-2xl text-textColor">
                  Give valid information
                </h2>
                <p className="font-primaryFont text-sm md:text-base text-textColor">
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
              <FormControl fullWidth margin="dense">
                <InputLabel id="demo-simple-select-label">
                  Course Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="course"
                  // value={course}
                  label="Course Name"
                  // onChange={handleChange}
                  placeholder="Select your course"
                >
                  <MenuItem value={`Graphics Design`}>Graphics design</MenuItem>
                  <MenuItem value={`Web Design`}>Web Design</MenuItem>
                  <MenuItem value={`UX / UIDesign`}>UX/UI Design</MenuItem>
                </Select>
              </FormControl>
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
