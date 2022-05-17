import React, { useState, useEffect } from 'react'

/* 
If we need to access state in a functional component, 
we can use hooks to do the job. They allow us to use state and other features without using a class. 

First thing you need to do is import "useState" in { useState } to access it (see above).
*/

const Hooks = () => {
    const [isOn, setIsOn] = useState(false); // The 1st value os the state variable (isOn) and the 2nd is the method that will update the state property (setIsOn).
    const [clickCount, setClickCount] = useState(0);

/*
In a class component, we would perform an http request in the "component did mount" lifecycle. 
To do this in a functional component, we can use the "useEffect" hook and it will excute something (whatever we pass into it) after every render.
This is a great place to put any http calls, especially if you have a functional component that needs to send a request or do any async input/output.
*/

    useEffect(() => {
      document.title = isOn ? 'LIGHT ON' : ' LIGHT OFF';
    });

  return (
    <div>
        <p>{isOn ? 'Yes, the light it is on!' : 'OFF'}</p>
        <p>Times Clicked: {clickCount}</p>
        <button onClick={() => {
          setIsOn(!isOn); 
          setClickCount(clickCount + 1)}
          }>Switch</button>
    </div>
  )
}

export default Hooks