import React, { useState } from "react";
import { Home, User, MessageSquare, AlignJustify, X, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if(isOpen){
      document.getElementById("hy").style.height='100vh'
    }

  };

  const NavLink = ({ to, icon: Icon, label }) => (
    <Link 
      to={to} 
      className="
        flex 
        items-center 
        space-x-2 
        py-2 
        px-4 
        text-gray-700 
        hover:bg-blue-100 
        rounded-lg 
        transition-colors 
        duration-300
      "
    >
      <Icon size={24} className="text-blue-500" />
      <span className={`${!isOpen ? 'hidden' : 'block'} text-sm font-medium`}>
        {label}
      </span>
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="
            text-2xl 
            font-bold 
            text-blue-600 
            hover:text-blue-700 
            transition-colors 
            duration-300
          "
        >
          Name
        </Link>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden cursor-pointer z-50"
          onClick={handleToggle}
        >
          {isOpen ? (
            <X 
              size={30} 
              className="text-blue-600 animate-rotate-in" 
            />
          ) : (
            <AlignJustify 
              size={30} 
              className="text-blue-600 animate-rotate-in" 
            />
          )}
        </div>

        {/* Navigation Links */}
        <div id="hy" className={`
           
          fixed 
          top-0 
          right-0 
          h-full 
          bg-white 
          shadow-lg 
          w-64 
          transform 
          transition-transform 
          duration-300 
          ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:static 
          md:w-auto 
          md:bg-transparent 
          md:shadow-none 
          md:translate-x-0 
          md:flex 
          md:space-x-4
          pt-20 
          md:pt-0
        `}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <NavLink to="/" icon={Home} label="Home" />
            <NavLink to="/cart" icon={ShoppingCart} label="Cart" />
            <NavLink to="/favorite" icon={Star} label="Profile" />
            <NavLink to="/feedback" icon={MessageSquare} label="Feedback" />
            <NavLink to="/profile" icon={User} label="Profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;