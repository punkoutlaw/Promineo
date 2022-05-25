import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EditUser = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { users, editUser } = useContext(GlobalContext);

  const [selectedUser, setSelectedUser] = useState(
    users.find((user) => user.id === userId)
  );

  useEffect(() => {
    if (!selectedUser) navigate(-1);
  }, [navigate, selectedUser]);

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    navigate("/");
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="container w-25">
      {selectedUser && (
        <Form className="form-control" onSubmit={onSubmit}>
          <FormGroup>
            <Label>Edit Name</Label>
            <Input
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={onChange}
              placeholder="Enter Name"
            />
          </FormGroup>
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn btn-danger m-2">
            Back
          </Link>
        </Form>
      )}
    </div>
  );
};

export default EditUser