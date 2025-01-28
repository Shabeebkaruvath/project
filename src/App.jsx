import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Profile from './componants/Profile/Profile';
import Cart from './componants/Profile/Cart';

import Feedback from './componants/Feedback/Feedback';
import Login from './componants/login/Login';
import Register from './componants/login/Register';

function App() {
  const [statelogin, setStatelogin] = useState('');

  return (
    <Router>
      <AppContent statelogin={statelogin} setStatelogin={setStatelogin} />
    </Router>
  );
}

function AppContent({ statelogin, setStatelogin }) {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/cart' element={<Cart />} />
 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;