import React, { useState } from 'react';
import { Home, User, X, AlignJustify,MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },

    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/feedback', icon: MessageCircle, label: 'feedback' },
 
    
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-500">Name</Link>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <AlignJustify />}
        </div>

        <div className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:block fixed md:static top-16 md:top-0 right-0 
          bg-white md:bg-transparent w-full md:w-auto 
        `}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link 
              key={to} 
              to={to} 
              className="block md:inline-block p-2 text-blue-900"
            >
              <div className="flex items-center">
                <Icon className="mr-2 text-black" />
                {label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;