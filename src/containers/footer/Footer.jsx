import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer_container">
        <div className="gpt3__footer_top">
          <h1>Do you want to step in to the future before others</h1>
          <button>Request Early Access</button>
        </div>
        <div className="gpt3__footer_links-section">
          <div className="gpt3__footer_company">
            <img src={logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer_links">
            <div className="gpt3__footer_link">
              <h4>Links</h4>
              <div className="gpt3__footer_link-list">
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="gpt3__footer_link">
              <h4>Company</h4>
              <div className="gpt3__footer_link-list">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="gpt3__footer_link">
              <h4>Get in touch</h4>
              <div className="gpt3__footer_link-list">
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>085-132567</p>
                <p>info@payme.net</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gpt3__footer_bottom">
          © 2021 GPT-3. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
