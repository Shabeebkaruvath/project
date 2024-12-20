import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Profile from './componants/Profile/Profile';
import Cart from './componants/Profile/Cart';
import Favorite from './componants/Profile/Favorite ';
import Feedback from './componants/Feedback/Feedback';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;