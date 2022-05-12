import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Stars = ({ setStar, stararr }) => {
  const [hover, setHover] = useState(null);

  const handleClick = (ratingValue) => {
    setStar(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const stararr = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={stararr}
              onClick={() => handleClick(stararr)}
            />
            <FaStar
              className="star"
              color={stararr <= (hover || stararr) ? "gold" : "lightgray"}
              size={20}
              onMouseEnter={() => setHover(stararr)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>I rate this movie {stararr + " stars"}</p>
    </div>
  );
};

export default Stars;

/*

// MUI STAR RATING \\

<div id="rating">
    <Typography component="legend"><b>Rating</b></Typography>
        <Rating name="half-rating" defaultValue={1} precision={0.5} 
        onChange={(event, newValue) => {
            setValue(newValue);
        }} />
</div>

*/