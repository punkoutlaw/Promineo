import React, { useState } from "react";
import { Button, Form, Input, InputGroupText } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [name, setName] = useState("");
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onChangeName = (e: any) => {
    setName(e.target.value);
  }
  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form Submitted");
  };
  
  return (
    <div>
    <div className="form-container">
      <Stars />
      <Form onSubmit={onSubmit}>
      <Input
          className="form-control" type="text"
          placeholder="Enter your name"
          value={name}
          onChange={onChangeName}
        />
        <br></br>
        <Input
          className="form-control" type="textarea"
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
    </div>
  );
}
