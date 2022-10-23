import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: "20px" } }}
        mb="33px"
        fontWeight={500}
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          ml: { lg: "7%" },
          gap: { lg: "100px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            className="exercise-video"
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="norefferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.channelName}
            />
            <Box>
              <Typography variant="h5" fontSize="18px" color="#000">
                {item.video.title}
              </Typography>
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize="14px"
                color="#000"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
