import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";


export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onSubmit = (e: any) => {
    console.log("Form Submitted");
  };

  return (
    <div className="form-container">
      <Stars />
      <Form onSubmit={onSubmit}>
        <Input
          className="form-control" type="text"
          placeholder="Enter you review"
          value={reviews}
          onChange={onChange}
        />
        <br></br>
        <Button type="submit" style={{ background: "Blue" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

/*

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

*/