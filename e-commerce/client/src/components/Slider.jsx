import "../style/Slider.scss";
import EastOutlined from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";
import { useState } from "react";

const Slider = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const handlePrevImg = () => {
    setCurrentImg(currentImg === 0 ? 2 : (prevImg) => prevImg - 1);
  };
  const handleNextImg = () => {
    setCurrentImg(currentImg === 2 ? 0 : (prevImg) => prevImg + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentImg * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={handlePrevImg}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={handleNextImg}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};
export default Slider;
