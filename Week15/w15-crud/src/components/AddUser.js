import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      id: uuid(),
      name: name
    }
    addUser(newUser);
    navigate('/');
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className='container w-25'>
        <Form className='form-control' onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input 
                type='text' 
                name={name} 
                value={name} 
                onChange={onChange} 
                placeholder='Enter Name'></Input>
            </FormGroup>
        <Button type='submit'>Submit</Button>
        <Link to='/' className='btn btn-danger m-2'>Back</Link>
        </Form>
    </div>
  )
}

export default AddUser