import React, { useState, useRef, useEffect } from "react";
import { Search,ShoppingCart} from "lucide-react";

const AnimatedSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  const inputRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 129.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };
  const handleSearchClick = () => {
    setShowProducts(searchTerm.trim().length > 0);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="relative mb-8">
          <input
            ref={inputRef}
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-300 focus:border-[#2e4156] focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400 bg-white transition-all duration-300"
          />
          <button
            onClick={handleSearchClick}
            aria-label="Search"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2e4156] hover:bg-[#2e4156] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300"
          >
            <Search size={20} />
          </button>
        </div>

        {showProducts && (
          <div className="space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">
                Results for "
                <span className="font-medium text-blue-600">{searchTerm}</span>"
              </p>
              <p className="text-sm text-gray-500">
                {products.length} items found
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                    <button className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search size={16} />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg font-semibold text-blue-600">
                        ${product.price}
                      </p>
                      <button className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700">
                        <ShoppingCart/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSearchBar;
