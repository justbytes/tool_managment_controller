import React, { useState } from "react";

import Dropdown from "../components/Dropdown";

import "./Archive.css";

const Archive = () => {
  const [option, setOption] = useState<string>("Part Number");
  const [searchResults, setSearchResults] = useState<boolean>(false);
  const options = ["Part Number", "Serial Number", "Manufacturer"];

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Searching...");
    setSearchResults(true);
  };

  const handleSelect = (value: string) => {
    console.log("Selected:", value);
    setOption(value);
  };

  return (
    <section className="archive-section">
      <div className="option">
        <>
          <h1>Work Order Archive</h1>
          <div className="update-tool-container">
            <form className="search-form">
              <h2>Search</h2>
              <div className="search-div">
                <div className="search-input-div">
                  <input
                    type="search"
                    id="search-input"
                    className="search-input"
                    placeholder={`Enter ` + option}
                  />
                  <Dropdown
                    options={options}
                    label="Search By"
                    onSelect={handleSelect}
                  />
                </div>
              </div>
              <button className="btn" type="submit" onClick={handleSearch}>
                Search
              </button>
              <h2>View tools by:</h2>
              <div className="find-all">
                <a className="find-all-option">View All</a>
                <a className="find-all-option">Part Number</a>
                <a className="find-all-option">Manufacturer</a>
              </div>
            </form>

            {searchResults ? (
              <div className="update-choice">
                <p>Specific WO Search result here</p>
              </div>
            ) : (
              <div className="update-choice">
                <p>Recent activity monitor here</p>
              </div>
            )}
          </div>
        </>
        <div className="back-div">
          <div className="back-div">
            <a href="#/">Back</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Archive;
