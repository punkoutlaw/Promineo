import React, { useState } from 'react';

const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState(undefined);

    const handleAreaInput = (e) => {
        e.preventDefault();
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '' );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
            console.log(onSubmit);
        }
    }

  return (
    <div className='border border-light'>
        <h4>Add a new room</h4>
        <form className="form" NameonSubmit={onSubmit}>
            <input type='text'
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            <input type='text'
            placeholder='area'
            onChange={handleAreaInput}
            value={area}
            />
            <button className='btn btn-primary' type='submit'>Add Room</button>
        </form>
    </div>
  )
};

export default NewRoomForm