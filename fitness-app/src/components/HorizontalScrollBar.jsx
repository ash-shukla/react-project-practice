import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyParts from "./BodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftIcon from "../assets/icons/left-arrow.png";
import RightIcon from "../assets/icons/right-arrow.png";

const HorizontalScrollBar = ({ ...props }) => {
  const {
    bodyParts,
    bodyPart,
    setBodyPart,
    targetMuscleExercies,
    isCalledFromSimilar,
  } = props;

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="left-arrow">
        <img src={LeftIcon} alt="left-icon" />
      </Typography>
    );
  };
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="right-arrow">
        <img src={RightIcon} alt="right-icon" />
      </Typography>
    );
  };

  const horizontalScrollData = () => {
    if (isCalledFromSimilar) {
      return [targetMuscleExercies];
    }
    return [bodyParts];
  };

  return (
    <ScrollMenu
      className="scroll-x"
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {bodyPart.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
