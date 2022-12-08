import React from "react";
import "./whatGPT3.css";

const WhatHeading = (props) => (
  <div className="what-heading">
    <div className="what-heading-line"></div>
    <div className="what-heading-text">{props.heading}</div>
  </div>
);

const WhatCards = (props) => (
  <div className="what-card">
    <div className="what-card-heading">
      <WhatHeading heading={props.heading} />
    </div>
    <div className="what-card-content">{props.content}</div>
  </div>
);

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3">
      <div className="gpt3__whatgpt3_container">
        <div className="blurred-circle1"></div>
        <div className="blurred-circle2"></div>
        <div className="gpt3__whatgpt3_first-section">
          <div>
            <WhatHeading heading="What is GPT-3" />
          </div>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="gpt3__whatgpt3_second-section">
          <h3>The possibilities are beyond your imagination</h3>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3_third-section">
          <WhatCards
            heading="Chatbots"
            content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <WhatCards
            heading="Knowledgebase"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <WhatCards
            heading="Education"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
