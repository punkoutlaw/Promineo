import React, { useState } from 'react'

/* If we need to access state in a functional component, 
we can use hooks to do the job. They allow us to use state and other features without using a class. 

First thing you need to do is import "useState" in { useState } to access it (see above).

*/

const Hooks = () => {
    const [isOn, setIsOn] = useState(false); // The 1st value os the state variable (isOn) and the 2nd is the method that will update the state property (setIsOn).
  return (
    <div>
        <p>{isOn ? 'Yes, it is on!' : 'OFF'}</p>
        <button onClick={() => setIsOn(!isOn)}>Switch</button>
    </div>
  )
}

export default Hooks