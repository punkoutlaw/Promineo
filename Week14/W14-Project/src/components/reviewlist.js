import React from "react";

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { comment } = this.props;
        return(
            <div>
                {comment}
            </div>
        );
    }
}

export default ReviewList