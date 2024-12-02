import React from "react";
import '../css/Navbar.css'
import { Home, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1><Link to={"/"}>App Name</Link></h1>
      <ul>
        <li>
          <Link to="/">
            <Home size={24} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <User size={24} />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/feedback">
            <MessageSquare size={24} />
            <span>Feedback</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
