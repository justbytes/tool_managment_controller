import React, { useState } from "react";

import "./HomePage.css";

function HomePage() {
  const [model, setModel] = useState<boolean>(false);

  const handleModelChange = () => {
    setModel(true);
  };

  return (
    <section>
      <div className="option">
        <div className="title">
          <h1>Main Menu</h1>
        </div>
        {!model && (
          <>
            <a className="big-a" href="#/create-wo">
              Create Work Order
            </a>
            <a className="big-a" href="#/item-managment">
              Item Management
            </a>
            <a className="big-a" href="#/archive">
              Work Order Archive
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default HomePage;
