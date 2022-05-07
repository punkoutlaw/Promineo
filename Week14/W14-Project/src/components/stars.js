import React, { useState } from "react";
import { FaStar} from 'react-icons/fa'
import { Rating, Typography } from '@mui/material';

const Stars = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return <label>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    />
                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? "gold" : "lightgray"} 
                    size={20}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                        </label>;
            })}
            <p>I rate this movie {rating + " stars"}</p>
        </div>
        );
};

export default Stars

/*

// MIUI STAR RATING \\

<div id="rating">
    <Typography component="legend"><b>Rating</b></Typography>
        <Rating name="half-rating" defaultValue={1} precision={0.5} 
        onChange={(event, newValue) => {
            setValue(newValue);
        }} />
</div>

*/