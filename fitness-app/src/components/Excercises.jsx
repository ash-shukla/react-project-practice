import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ExcerciseCard from "./ExcerciseCard";

const Excercises = ({ ...props }) => {
  const { excercises } = props;
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

  return (
    <Box id="excercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px" ml="120px">
        {`${excercises.length === 0 ? "Loading..." : "Showing Results"}`}
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
