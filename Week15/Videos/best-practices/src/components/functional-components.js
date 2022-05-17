import React from 'react'

const FunctionalComponents = () => {
  return (
    <div>
        <Person/>
        <Person />
    </div>
  )
}

const Person = () => {
    return(
        <div>
            <h1>Person Name</h1>
            <h2>Person Age</h2>
        </div>
    );
}; 

export default FunctionalComponents

/*

// WITH PROPS \\

import React, { useState } from 'react'

const FunctionalComponents = () => {
  return (
    <div>
        <Person name="Tom" age="32"/>
        <Person name="Sally" age="34"/>
    </div>
  )
}

const Person = (props) => {
    const {name, age} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h2>Person Age: {age}</h2>
        </div>
    );
}; 

export default FunctionalComponents

*/