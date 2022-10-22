import { Stack, Typography } from "@mui/material";
import React from "react";
import Gym from "../assets/icons/gym.png";

const BodyParts = ({ ...props }) => {
  const { item, bodyPart, setBodyPart } = props;
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "220px",
        height: "230px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scroll({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Gym} alt="gyming" style={{ width: "50px", height: "50px" }} />
      <Typography
        fontSize="17px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyParts;
