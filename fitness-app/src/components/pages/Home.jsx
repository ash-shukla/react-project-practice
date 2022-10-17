import { Box } from "@mui/material";
import React from "react";
import Excercises from "../Excercises";
import HeroBanner from "../HeroBanner";
import SearchExcercise from "../SearchExcercise";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercise />
      <Excercises />
    </Box>
  );
};

export default Home;
