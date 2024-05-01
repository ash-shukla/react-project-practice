import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((x, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i}>
            <FaStar
              onMouseEnter={() => setHover(ratingVal)}
              onMouseLeave={() => setHover(null)}
              color={ratingVal <= (hover || rating) ? "yellow" : "grey"}
              size={140}
              className="star"
              onClick={() => setRating(ratingVal)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarComponent;
