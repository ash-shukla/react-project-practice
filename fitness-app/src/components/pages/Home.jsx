import { Box } from "@mui/material";
import React, { useState } from "react";
import Excercises from "../Excercises";
import HeroBanner from "../HeroBanner";
import SearchExcercise from "../SearchExcercise";

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [excercises, setExcercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExcercise
        bodyPart={bodyPart}
        setbodyPart={setbodyPart}
        setExcercises={setExcercises}
      />
      <Excercises
        bodyPart={bodyPart}
        excercises={excercises}
        setExcercises={setExcercises}
      />
    </Box>
  );
};

export default Home;
