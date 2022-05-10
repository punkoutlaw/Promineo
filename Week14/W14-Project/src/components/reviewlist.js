import React from "react";
import Review from "./review";
import Stars from "./stars";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: [],
            comment: [],
            rating: <Stars />
        }
    }
    render() {
        const { comment } = this.props;
        const { stars } = this.props
        return(
            <div>
                <p>{stars}</p>
                <p>{comment}</p>
            </div>
        );
    }
}

export default ReviewList