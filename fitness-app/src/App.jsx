import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExcerciseDetail from "./components/pages/ExcerciseDetail";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Box width={400} sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excercise/:id" element={<ExcerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
