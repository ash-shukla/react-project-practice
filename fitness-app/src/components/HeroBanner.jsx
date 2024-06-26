import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "160px", xs: "70px" }, ml: { sm: "50px", xs: "80px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="20px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most exffective excercises
      </Typography>
      <Button href="#excercises" variant="contained" color="error">
        Explore Excercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Excercise
      </Typography>
      <img src={HeroBannerImage} alt="heroImg" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
