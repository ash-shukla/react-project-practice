import {
  Box,
  Button,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExcercise = ({ ...props }) => {
  const { bodyPart, setbodyPart, setExcercises } = props;
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExcerciseList = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );
      setBodyParts([...bodyPartData]);
    };
    fetchExcerciseList();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );
      const searchedExcercises = excerciseData.filter(
        (x) =>
          x.name.toLowerCase().includes(search) ||
          x.target.toLowerCase().includes(search) ||
          x.equipment.toLowerCase().includes(search) ||
          x.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExcercises(searchedExcercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="80px"
        textAlign="center"
      >
        Awesome Excercises you
        <br /> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ width: { lg: "1006px", xs: "350px" } }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Excercise"
        />
        <Button
          onClick={handleSearch}
          sx={{ height: "56px", position: "absolute", right: "0" }}
          color="error"
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          bodyParts={bodyParts}
          bodyPart={bodyPart}
          setbodyPart={setbodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercise;
