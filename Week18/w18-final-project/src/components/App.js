import React from 'react';
import '../styles/App.css'
import Navigation from "./Navigation";
import Cards from './Cards';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
