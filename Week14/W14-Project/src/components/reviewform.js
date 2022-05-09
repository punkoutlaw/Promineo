import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Stars from './stars';
import ReviewList from './reviewlist';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [
                // {id: 1, comment: "The critics are RAVING about this movie!"},
                // {id: 2, comment: "The blockbuster you've been waiting for!"}
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({postTitle: event.target.value});
    }
    handleReviewSubmit = event => {
        event.preventDefault();
            const post = {
                postName: this.state.reviews
            };
        axios.post(
            'https://jsonplaceholder.typicode.com/posts', {post})
            .then(res => {
                console.log(res);
                console.log(res.data);
                let reviews = this.state.reviews;
                reviews.unshift({
                    id: reviews.length + 1,
                    comment: res.data.review
                });
                this.setState({reviews: reviews});
            })
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
        <div className='card'>
            <label>
                <div className='card-header'>Review Movie</div>
            </label>
            <div className="card-body">
                <Stars />
            <form onSubmit={this.handleReviewSubmit}>
                <label>
                <br></br>
                <input type="text" name="name" className="form-control"
                        onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
 )}}

export default ReviewForm