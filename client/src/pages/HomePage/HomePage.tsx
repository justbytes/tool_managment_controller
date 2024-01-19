import React from "react";

import "./HomePage.css";

function HomePage() {
  return (
    <section>
      <div className="option">
        <div className="title">
          <h1>Main Menu</h1>
        </div>
        <>
          <div className="choice">
            <a className="big-a" href="#/create-wo">
              Create Work Order
            </a>
            <a className="big-a" href="#/item-managment">
              Item Management
            </a>
            <a className="big-a" href="#/archive">
              Work Order Archive
            </a>
          </div>
        </>
      </div>
    </section>
  );
}

export default HomePage;
