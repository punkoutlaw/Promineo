import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [value2, setValue2] = useState("")
  const [star, setStar] = useState();
  const [value3, setValue3] = useState(0)

  const onChange = (e) => {
    setReviews(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValue(reviews);
    setValue2(name)
    setValue3(star);
  };

  return (
    <div className="form-container">
      <Stars setStar={setStar} />
      <Form onSubmit={onSubmit}>
      <Input
            className="form-control" type="text"
            placeholder="Enter your name"
            value={name}
            onChange={onChangeName}
          />
        <Input
          className="form-control"
          type="textarea"
          placeholder="Enter you review"
          value={reviews}
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
          {value2}
          <br></br>
          <p>{value}</p> 
          <p>I rate this movie {value3} stars!</p>
          </div>
      </Form>
    </div>
  );
}