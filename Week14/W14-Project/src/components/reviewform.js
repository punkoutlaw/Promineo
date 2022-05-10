import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Stars from './stars';
import ReviewList from './reviewlist';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            name: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({postTitle: event.target.value});
    }
    handleReviewSubmit = event => {
        console.log(this.state.postTitle)
        event.preventDefault();
            const post = {
                postName: this.state.reviews
            };
            let data = {
                comment: this.state.postTitle
            };
        axios.post(
            'https://jsonplaceholder.typicode.com/comments', data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                let reviews = this.state.reviews.slice();
                reviews.push(res.data)
                this.setState({reviews: reviews})
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
            {this.renderReviews()}
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
                    placeholder="Your name" onChange={this.handleChange} />
                <br></br>
                <textarea type="text" name="name" className="form-control"
                    placeholder="Write a review" onChange={this.handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
 )}}

export default ReviewForm