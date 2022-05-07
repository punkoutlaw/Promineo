import React from "react";
import Stars from "./stars";

class MovieForm extends React.Component {
    render() {
        return(
            <div>
                <form className="form-control">
                <Stars />
                    <span className="formtext"></span>
                        <input className="form-control" type="text" placeholder="Write a review" required />
                        <br></br>
                        <button className="btn btn-primary" type="submit" placeholder="Submit Review">Submit</button>
    	        </form>
            </div>
        );
    }
}

export default MovieForm