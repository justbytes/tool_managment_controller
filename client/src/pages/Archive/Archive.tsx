import React from "react";
import "./Archive.css";

const Archive = () => {
  return (
    <section className="archive-section">
      <form className="archive-form">
        <div>
          <p>Place for search inputs that search db here...</p>
        </div>
        <div className="btn-container">
          <button className="btn" type="submit">
            Submit
          </button>
          <a href="#/">Home</a>
        </div>
      </form>
      <div className="recent-activty-container">
        <h3>
          Here is where you can see recent activity like new wo's, change of
          tool log, change to excel doc.
        </h3>
        <p>list of recent changes here...</p>
      </div>
    </section>
  );
};

export default Archive;
