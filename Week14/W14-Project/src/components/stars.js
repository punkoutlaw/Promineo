import React from "react";
import { Rating, Typography } from '@mui/material';

class Stars extends React.Component {
    render() {
        let setValue = 0;
        return(
            <div id="rating">
                <Typography component="legend"><b>Rating</b></Typography>
                    <Rating name="half-rating" defaultValue={1} precision={0.5} 
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }} />
            </div>
        );
    }
}

export default Stars