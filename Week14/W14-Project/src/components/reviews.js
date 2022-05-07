import React from "react";
import Stars from "./stars";

const Reviews = () => {
    const [review, setReview] = useState(null);
  return (
    <div>
    <form className="form-control">
    <Stars />
        <span className="formtext"></span>
            <input className="form-control" type="text" placeholder="Write a review" required />
            <br></br>
            <button className="btn btn-primary" type="submit" placeholder="Submit Review">Submit</button>
    </form>
</div>
  )
}

export default Reviews