import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviewinput, setReviewInput] = useState("");
  const [reviewarray, setReviewArray] = useState([]);
  const [nameinput, setNameInput] = useState("");
  const [stararr, setStarArr] = useState(0);

  const onChange = (e) => {
    setReviewInput(e.target.value);
  };
  const onChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    const review = {};

    if (reviewinput) {
      review.review = reviewinput;
    }
    if (nameinput) {
      review.name = nameinput;
    }
    review.stars = stararr;
    setReviewArray([...reviewarray, review]);
    setReviewInput("");
    setNameInput("");
    setStarArr(0);
  };
  console.log(reviewarray);
  return (
    <div className="form-container">
      <Form onSubmit={onSubmit}>
        <Stars setStar={setStarArr} stararr={stararr} />
        <Input
          className="form-control"
          type="text"
          placeholder="Enter your name"
          value={nameinput}
          onChange={onChangeName}
          required
        />
        <Input
          className="form-control"
          type="textarea"
          placeholder="Enter your review"
          value={reviewinput}
          onChange={onChange}
          required
        />
        <br></br>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
        <br></br>
        <br></br>
        <div className="card-header border boorder-dark">
          <h5>Reviews</h5>
        </div>
        <div className="card-body border border-secondary">
          <br></br>
          {reviewarray.map(({ review, name, stars }, i) => (
            <div key={i}>
              <p><b>{name}</b></p>
              <p>Review: {review}</p>
              <p>Stars: {stars}</p>
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
}

/*

import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviewinput, setReviewInput] = useState("");
  const [reviewarray, setReviewArray] = useState([]);
  const [nameinput, setNameInput] = useState("");
  const [namearray, setNameArray] = useState([])
  const [starinput, setStarInput] = useState();
  const [stararr, setStarArr] = useState(0)

  const onChange = (e) => {
    setReviewInput(e.target.value);
  };
  const onChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    if (reviewinput) {
      reviewarray.push(reviewinput);
      setReviewArray(reviewarray);
    }
    if (nameinput) {
      namearray.push(nameinput);
      setNameArray(namearray);
    }
    if (starinput) {
      stararr.push(starinput);
      setStarArr(stararr);
    }
      setReviewInput('');
      setNameInput('');
      setStarInput(0)
  };
  console.log(reviewarray);
  return (
    <div className="form-container">
      <Stars setStar={setStarArr} />
      <Form onSubmit={onSubmit}>
      <Input
            className="form-control" type="text"
            placeholder="Enter your name"
            value={nameinput}
            onChange={onChangeName}
          />
        <Input
          className="form-control"
          type="textarea"
          placeholder="Enter your review"
          value={reviewinput}
          onChange={onChange}
        />
        <br></br>
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
        <br></br>
        <br></br>
        <div className="card-header border boorder-dark">
          <h5>Reviews</h5>
          </div>
          <div className="card-body border border-secondary">
          {namearray.map((name, i) => <p key={i}>{name}</p>)}
          <br></br>
          {reviewarray.map((review, i) => <p key={i}>{review}</p>)}
          <p>I rate it this movie {stararr} stars!</p>
          </div>
      </Form>
    </div>
  );
}

*****

       <Button type="submit" className="btn btn-primary" onClick={() => {
          setValue('');
        }}>

*/