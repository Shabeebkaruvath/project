import React, { useState } from "react";
import "../css/Home.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dis, setDis] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const displaySearchTerm = () => {
    setDis(searchTerm);
    console.log(`Search Term: ${searchTerm}`);
    // Implement your actual search logic here (e.g., API call, data filtering)
  };

  return (
    <div className="search-bar-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="submit" onClick={displaySearchTerm}>
          Search
        </button>
      </div>
      <br />
      <div>
        <pre>Search Results: {dis}</pre>
      </div>
    </div>
  );
}

export default SearchBar;
