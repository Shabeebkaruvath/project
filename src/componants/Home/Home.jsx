import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

const AnimatedSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayTerm, setDisplayTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const displaySearchTerm = () => {
    if (searchTerm.trim()) {
      setDisplayTerm(searchTerm);
      setIsAnimating(true);
      console.log(`Search Term: ${searchTerm}`);
      
      // Reset animation after a short delay
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  // Focus input on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
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
              border-blue-200 
              focus:border-blue-500 
              focus:outline-none 
              focus:ring-2 
              focus:ring-blue-300 
              transition-all 
              duration-300 
              text-gray-700 
              shadow-md
              ${isAnimating ? 'animate-pulse' : ''}
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
              bg-blue-500 
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