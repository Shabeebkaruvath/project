import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

const AnimatedSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayTerm, setDisplayTerm] = useState('');
 
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const displaySearchTerm = () => {
    if (searchTerm.trim()) {
      setDisplayTerm(searchTerm);
    
      console.log(`Search Term: ${searchTerm}`);
      
      // Reset animation after a short delay
      setTimeout(() => {
        setDisplayTerm("");
      }, 3000);
    }
  };

  // Focus input on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[#aab7b7] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleSearch}
            className={`
              w-full 
              pl-4 
              pr-12 
              py-3 
              rounded-full 
              border-2 
              border-[#2e4156] 
              focus:border-[#000]
              focus:outline-none 
              focus:ring-2 
              text-black
              placeholder-[#2e4156]
              focus:placeholder-[#2e4156]
              focus:ring-[#2e4156]
              text-gray-700 
              bg-transparent
              }
            `}
            onKeyPress={(e) => e.key === 'Enter' && displaySearchTerm()}
          />
          <button 
            onClick={displaySearchTerm}
            className="
              absolute 
              right-1 
              top-1/2 
              transform 
              -translate-y-1/2 
              bg-[#2e4156] 
              hover:bg-black
              hover:text-white
              text-white 
              rounded-full 
              w-10 
              h-10 
              flex 
              items-center 
              justify-center 
              hover:#07118b
              transition-colors 
              duration-300
            "
          >
            <Search size={20} />
          </button>
        </div>

        {displayTerm && (
          <div 
            className="
              mt-4 
              bg-white 
              p-4 
              rounded-lg 
              shadow-md 
              text-center 
              animate-fade-in 
              border-l-4 
              border-blue-500
            "
          >
            <p className="text-gray-700">
              Search Results for: 
              <span className="font-bold text-blue-600 ml-2">
                {displayTerm}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSearchBar;