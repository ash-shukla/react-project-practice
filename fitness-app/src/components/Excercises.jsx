import { Box, Pagination, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import ExcerciseCard from "./ExcerciseCard";

const Excercises = ({ ...props }) => {
  const { excercises, bodyPart, setExcercises } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const paginate = (e, val) => {
    setCurrentPage(val);
    window.scroll({ top: "2px", behavior: "smooth" });
  };

  const currentExercises = excercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          excerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          excerciseOptions
        );
      }
      setExcercises(exerciseData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="excercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight={600}
        sx={{
          fontSize: { lg: "45px", xs: "25px" },
          ml: { lg: "100px", xs: "80px" },
        }}
        mb="46px"
        ml={excercises.length === 0 ? "450px" : "100px"}
      >
        {`${
          excercises.length === 0 ? "Loading Exercises..." : "Showing Results"
        }`}
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((excercise, key) => (
          <ExcerciseCard key={key} excercise={excercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
