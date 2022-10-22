import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Excercises = ({ ...props }) => {
  const { bodyPart, setExcercises, excercises } = props;
  console.log("excercises", excercises);
  return (
    <Box id="excercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Loading...
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {excercises.map((excercise) => (
          <p>{excercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Excercises;
