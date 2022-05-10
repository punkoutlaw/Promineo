import React from 'react'
import Stars from './stars';

class ReviewForm extends React.Component {
    render() {
        return(
            <div className='card'>
                <div className='card-header'>
                    <h5>Review Movie</h5>
                </div>
                <br></br>
                <Stars />
                <div className='card-body'>
                    <form className='form-control'>
                        <textarea className='form-control' placeholder='Write a review'></textarea>
                        <br></br>
                        <button className='btn btn-primary' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ReviewForm