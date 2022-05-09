import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './reviews';
import ReviewList from './reviewlist';

class ReviewGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [
                {id: 1, comment: "The critics are RAVING about this movie!"},
                {id: 2, comment: "The blockbuster you've been waiting for!"}
            ]
        }

        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }

    handleReviewSubmit(data) {
        const postData = {
            review: data
        };
        axios.post('/api/comment/save', postData).then((response) => {
            // console.log('response', response.data);
            let reviews = this.state.reviews;
            reviews.unshift({
                id: reviews.length + 1,
                comment: response.data.review
            });
            this.setState({reviews: reviews});
        });
    }

    renderReviews() {
        const { reviews } = this.state;
        return reviews.map(review => {
            const {id, comment} = review;
            return(
                <ReviewList key={id} comment={comment}/>
            );
        })
    }

    render() {
        return(
            <div>
                {/* {this.renderReviews()} */}
                <Reviews handleReviewSubmit={this.handleReviewSubmit}/>
            </div>
        );
    }
}

export default ReviewGroup