import React from "react";
import { Rating, Typography } from '@mui/material';

class Stars extends React.Component {
    render() {
        return(
            <div>
                <Typography component="legend">Controlled</Typography>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
            </div>
        );
    }
}

export default Stars