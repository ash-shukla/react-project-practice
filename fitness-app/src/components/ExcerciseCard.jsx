import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExcerciseCard = ({ ...props }) => {
  const { excercise, key } = props;
  return (
    <Link className="exercise-card " to={`/excercise/${excercise.id}`}>
      <img src={excercise.gifUrl} alt={excercise.name} loading="lazy" />
      <Stack direction="row" className="exercise-desc">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {excercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="18px"
      >
        {excercise.name}
      </Typography>
    </Link>
  );
};

export default ExcerciseCard;
