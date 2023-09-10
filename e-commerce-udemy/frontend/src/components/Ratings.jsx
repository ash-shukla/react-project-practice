import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ratings = ({ value, text }) => {
  const starsRating = () => {
    // for (let i = 0; i < Math.round(value); i++) {
    //   {
    //     i >= 1 ? <FaStar /> : i >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />;
    //   }
    // }
    <FaStar />;
  };
  return (
    <div className="rating">
      {/* {value >= 1 ? (
        <FaStar />
      ) : value >= 0.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar />
      )} */}
      {starsRating}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Ratings;
