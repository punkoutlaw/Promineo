import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("")
  const [star, setStar] = useState();
  const [name, setName] = useState("");
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setValue2(name)
    setValue(reviews + " I rate it " + star + " stars ");
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
          </div>
      </Form>
    </div>
  );
}

/*

import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import Stars from "./stars";

export default function ReviewForm() {
  const [reviews, setReviews] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("")
  
  const onChange = (e: any) => {
    setReviews(e.target.value);
  };
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault()
    setValue(reviews)
    setValue2(name)
    console.log("Form Submitted");
    console.log(name)
    console.log(reviews)
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
          <br></br>
          <br></br>
          <div className="card-header border boorder-dark">
          <h5>Reviews</h5>
          </div>
          <div className="card-body border border-secondary">
          {value2}
          <br></br>
          <p>{value}</p>
          </div>
        </Form>
      </div>
    </div>
  );
}

*/