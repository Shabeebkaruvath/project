import { Home, User, Phone, Edit, ShoppingCart, Heart, LogOut } from 'lucide-react'
import React, { useState } from 'react';
import {
 
  Menu,
  MenuItem,
 
} from '@mui/material';
import "../css/Navbar.css"

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>name</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Home size={20} />
            <span>Home</span>
          </li>
          <li className="navbar-item">
            <Phone size={20} />
            <span>Contact</span>
          </li>
          <li 
            className="navbar-item"
            onMouseEnter={handleHover}
          >
            <User size={20} />
            <span>Profile</span>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onMouseLeave={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Edit size={16} style={{marginRight: 10}}/>
                Edit Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ShoppingCart size={16} style={{marginRight: 10}}/>
                Cart
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Heart size={16} style={{marginRight: 10}}/>
                Favourites
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <LogOut size={16} style={{marginRight: 10}}/>
                Logout
              </MenuItem>
            </Menu>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar