import React from 'react'
import { Button, Form, Input } from "reactstrap";
import Review from './review';
import Stars from './stars';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      name: props.name
    };
  }
    render() {

      let reviews = [];
      if(this.state.reviews) {
        for(let review of this.state.reviews) {
          reviews.push(<Review {...review}/>)
        }
      }

        return(
          <div className="form-container">
          <Stars />
          <Form>
            <Input
              className="form-control" type="text"
              placeholder="Enter you review"
            />
            <br></br>
            <Button type="submit" className="btn btn-primary">
              Submit
            </Button>
            {reviews}
          </Form>
        </div>
        );
    }
}

export default ReviewForm

/*

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
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

        let firstName = [];
      if(this.state.firstName) {
        for(let firstName of this.state.firstName) {
          firstName.push(<Review {...firstName}/>)
        }

        let lastName = [];
      if(this.state.lastName) {
        for(let lastName of this.state.lastName) {
          lastName.push(<Review {...lastName}/>)
        }
        let comments = [];
      if(this.state.comments) {
        for(let comment of this.state.comments) {
          comments.push(<Review {...comments}/>)
        }

        let timestamp = [];
      if(this.state.timestamp) {
        for(let timestamp of this.state.timestamp) {
          timestamp.push(<Review {...timestamp}/>)
        }

*/