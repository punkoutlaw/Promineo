import React, { useState } from "react";
import Stars from "./stars";

// function Reviews(props) {
//     const {handleReviewSubmit} = props;
//     const [review, setReview] = useState('');
//     return (
//         <div>
//             <div className="card">
//                 <div className="card-header"><strong>Reviews</strong></div>
//                 <div className="card-body">
//                     <Stars />
//                     <textarea name="review" className="form-control" placeholder="Write a review"
//                         onChange={event => setReview(event.target.value)} value={review}></textarea>
//                 </div>
//             </div>
//             <div>
//                 <button className="btn btn-primary" onClick={event => {
//                     handleReviewSubmit(review);
//                     setReview('');}}>Submit</button>
//                 {/* <button className="btn btn-danger">Delete</button> */}
//             </div>
//         </div>
//     );
//     }

// export default Reviews