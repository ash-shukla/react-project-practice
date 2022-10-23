import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  excerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";
import Detail from "../Detail";
import ExerciseVideo from "../ExerciseVideo";
import SimilarExercises from "../SimilarExercises";

const ExcerciseDetail = ({ ...props }) => {
  const { setEx } = props;
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercies, setTargetMuscleExercies] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exercseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`;
      const exerciseDetailData = await fetchData(
        `${exercseDbUrl}/exercises/exercise/${id}`,
        excerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const suggestedExerciseVideos = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(suggestedExerciseVideos.contents);

      const targetMuscleExerciseData = await fetchData(
        `${exercseDbUrl}/exercises/target/${suggestedExerciseVideos.target}`,
        excerciseOptions
      );
      setTargetMuscleExercies(targetMuscleExerciseData);
      const equipmentMuscleExerciseData = await fetchData(
        `${exercseDbUrl}/exercises/equipment/${suggestedExerciseVideos.equipment}`,
        excerciseOptions
      );
      setEquipmentExercise(equipmentMuscleExerciseData);
    };
    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercies={targetMuscleExercies}
        equipmentExercise={equipmentExercise}
      />
    </Box>
  );
};

export default ExcerciseDetail;
