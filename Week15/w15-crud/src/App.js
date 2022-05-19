import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (

    <div className="App">
        <header className="App-header">
          <h1>Home</h1>  
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Add" element={<AddUser />} />
            <Route path="/Edit" element={<EditUser />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
