import React from "react";
import possibility from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility">
      <div className="gpt3_possibility-container">
        <img src={possibility} alt="possibility" />
        <div className="gpt3__possibility-text">
          <p className="gpt3__possibility-request-top">Request Early Access to Get Started</p>
          <h2 className="gpt3__possibility-heading">The possibilities are beyond your imagination</h2>
          <p className="gpt3__possibility-content">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className="gpt3__possibility-request-bottom">Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
