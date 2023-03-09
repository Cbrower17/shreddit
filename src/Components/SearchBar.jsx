import React, { useState } from "react";

function SearchBar({ setCurrentSearch }) {
  const [searchTerm, setSearch] = useState("");
  function updateSearch(search) {
    setCurrentSearch(search);
    setSearch(search);
  }
  return (
    <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
        id="search"
        value={searchTerm}
        onChange={(e) => updateSearch(e.target.value)}
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
    // <div className="searchbar">
    //   <label htmlFor="search">Search Plants:</label>
    //   <input
    //     type="text"
    //     id="search"
    //     placeholder="Type a name to search..."
    //     value={searchTerm}
    //     onChange={(e) => updateSearch(e.target.value)}
    //   />
    //   <button type="submit">search this jawn</button>
    // </div>
  );
}

export default SearchBar;