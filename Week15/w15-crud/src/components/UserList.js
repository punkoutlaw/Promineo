import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div className='container'>
        <ListGroup>
          {users.length > 0 ? (
            <>
            {users.map(user => (
              <ListGroupItem className='d-flex' key={user.id}>
              <strong>{user.name}</strong>
              <div className='m-auto'>
              </div>
              <Link className='btn btn-warning m-1' to={`/Edit/${user.id}`}>Edit</Link>
              <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
          </ListGroupItem>
            ))}
            </>
          ) : (<h4>No user</h4>)}
        </ListGroup>
    </div>
  )
}

export default UserList