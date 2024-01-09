import React from "react";

import "./HomePage.css";

function HomePage() {
  return (
    <section>
      <div className="option">
        <div className="title">
          <h1>Main Menu</h1>
        </div>
        <a className="big-a" href="#/create-wo">
          Create WO
        </a>
        <a className="big-a" href="#/add-item">
          Add New Item
        </a>
        <a className="big-a" href="#/update-item">
          Update Item
        </a>
      </div>
    </section>
  );
}

export default HomePage;
