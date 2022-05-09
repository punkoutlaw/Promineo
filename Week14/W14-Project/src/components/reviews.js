import React, { useState } from "react";
import Stars from "./stars";

function Reviews(props) {
    const {handleReviewSubmit} = props;
    const [review, setReview] = useState('');
    return (
        <div>
            <div className="card">
                <div className="card-header"><strong>Reviews</strong></div>
                <div className="card-body">
                    <Stars />
                    <textarea name="review" className="form-control" placeholder="Write a review"
                        onChange={event => setReview(event.target.value)} value={review}></textarea>
                </div>
            </div>
            <div>
                <button className="btn btn-primary" onClick={event => {
                    handleReviewSubmit(review);
                    setReview('');}}>Submit</button>
                {/* <button className="btn btn-danger">Delete</button> */}
            </div>
        </div>
    );
    }

export default Reviews

/*

  <div>
    <form className="form-control">
        <Stars />
        <span className="formtext">{review}</span>
        <br></br>
        <br></br>
            <input 
            className="form-control" 
            type="text" name="review" 
            placeholder="Write a review"
            required />

            <br></br>

            <button 
            className="btn btn-primary"
            type="submit" 
            placeholder="Submit Review"
            onClick={addReview}
            >Submit</button>
            <button 
            className="btn btn-danger"
            type="submit" 
            placeholder="Delete Review"
            onClick={deleteReview}
            >Delete</button>
    </form>
  </div>

      <div className="form-control">
          <Stars />
          <form action="javascript:void(0)" method="POST" onSubmit="app.Add()">
            <input type="text" id="add-review" placeholder="Write review"></input>
            <input type="submit" value="Submit" className="btn btn-primary"></input>
          </form>
          <br></br>
      </div>

*/