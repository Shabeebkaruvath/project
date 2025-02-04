import React, { useState } from 'react';
import { Home, User, X, AlignJustify,MessageCircle,ShoppingCart   } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
 

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },

    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/feedback', icon: MessageCircle, label: 'feedback' },
    
  ];

  
  return (
    <nav className="absolute top-0 left-0 w-full bg-[#2e4156] shadow-md z-50 mb-5">
      <div className="container mx-auto flex  justify-between items-center p-4 ">
        <Link to="/" className="text-3xl text-[#d4d8dd] mr-10 font-['Open_Sans']"><div className='flex items-center'>shop<ShoppingCart size={30}/></div></Link>

        <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <AlignJustify />}
        </div>

        <div className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:block fixed md:static top-16 md:top-0 right-0 
          bg-gray-50 md:bg-transparent w-full md:w-auto 
        `}>
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link 
              key={to} 
              to={to} 
              className="block md:inline-block p-2 hover:bg-[#eff6ff] rounded  text-[#d4d8dd] hover:text-[#2e4156]"
            >
              <div className="flex items-center">
                <Icon className="mr-1" />
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