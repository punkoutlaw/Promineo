import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/css/index.css';
import App from './components/App';
import InboxPage from './components/InboxPage';
import ProfilePage from './components/ProfilePage';

const root = ReactDOM.createRoot
(document.getElementById('root')
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Inbox' element={<InboxPage />} />
      <Route path='/NewPost' element={<App />} />
      <Route path='/Explore' element={<App />} />
      <Route path='/Notifications' element={<App />} />
      <Route path='/Profile' element={<ProfilePage />} />
    </Routes>
  </Router>
);
