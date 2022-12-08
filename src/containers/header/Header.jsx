import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header">
      <div className="gpt3__header_container">
        <div className="gpt3__header-top">
          <div className="gpt3__header-text">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className="gpt3__header-text_input">
              <input type="text" placeholder="Your Email Address" />
              <button>Get Started</button>
            </div>
            <div className="gpt3__header-text__bottom">
              <div className="gpt3__header-text__bottom_image">
                <img src={people} alt="people" />
              </div>
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
