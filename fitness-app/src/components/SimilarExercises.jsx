import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SimilarExercises = ({ equipmentExercise, targetMuscleExercies }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises that target the same muscles group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercies.length && (
          <HorizontalScrollBar targetMuscleExercies={targetMuscleExercies} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
