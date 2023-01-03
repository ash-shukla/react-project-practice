import "../style/Slider.scss";
import EastOutlined from "@mui/icons-material/EastOutlined";
import WestOutlined from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1255",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1255",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1255",
  ];
  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <EastOutlined />
        </div>
        <div className="icon">
          <WestOutlined />
        </div>
      </div>
    </div>
  );
};
export default Slider;
