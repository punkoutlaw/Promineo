import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './components/Main';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <div className="App">
        <header className="bg-dark">
          <h1>Teams</h1>  
        </header>
        <div className='card-body'>
        <GlobalProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/Add" element={<AddUser />} />
              <Route path="/Edit/:id" element={<EditUser />} />
            </Routes>
          </Router>
        </GlobalProvider>
        </div>
    </div>
  );
}

export default App;
