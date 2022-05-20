import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const EditUser = (props) => {
const [selectedUser, setSelectedUser] = useState({
  id: '',
  name: ''
});
const { users, editUser } = useContext(GlobalContext);
const navigate = useNavigate();
const currentUserId = useParams(props);

useEffect(() => {
  const userId = currentUserId;
  const selectedUser = users.find((user) => user.id === userId);
  if (selectedUser) {
    setSelectedUser(selectedUser);
  } 
}, [currentUserId, users]);

const onSubmit = (e) => {
  e.preventDefault()
  editUser(selectedUser)
  navigate('/');
}

const onChange = (e) => {
  setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
}

  return (
    <div className='container w-25'>
        <Form className='form-control' onSubmit={onSubmit}>
            <FormGroup>
                <Label>Edit Name</Label>
                <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='Enter Name'></Input>
            </FormGroup>
        <Button type='submit'>Edit Name</Button>
        <Link to='/' className='btn btn-danger m-2'>Back</Link>
        </Form>
    </div>
  )
}

export default EditUser