/* 

** HOW TO CREATE BOILER-PLATE CODE FOR REACT**

1) First, install react in the directory, run "npm install react --save-dev" in cmd prompt.
2) Next, run "npm install react-dom --save-dev" in the same directory.
3) Next, run "npm install webpack --save-dev".
4) Next, run "npm install webpack-cli --save-dev.
*/

import React from 'react';
import ReactDOM from 'react-dom';

let element = React.createElement('h1', {}, 'This is React!');
ReactDOM.render(element, document.getElementById('app'));