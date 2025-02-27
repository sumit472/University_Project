import "./Contact.css";
import React from "react";

import contact from "./../assets/contact.avif";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1>OUR CONTACT</h1>
      </div>
      <div className="contactbox">
        <div className="contactbox1">
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>

          <h3>Office Address</h3>
          <p>25/B Milford, New York, USA</p>
        </div>
        <div className="contactbox1">
          <div className="icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <h3>Office Address</h3>
          <p>25/B Milford, New York, USA</p>
        </div>
        <div className="contactbox1">
          <div className="icon">
            <i className="fa-solid fa-envelope"></i>
          </div>

          <h3>Office Address</h3>
          <p>25/B Milford, New York, USA</p>
        </div>
        <div className="contactbox1">
          <div className="icon">
            <i className="fa-solid fa-lock"></i>
          </div>

          <h3>Office Address</h3>
          <p>25/B Milford, New York, USA</p>
        </div>
      </div>
      <div className="form">
        <div className="contactleft">
          <img src={contact} />
        </div>
        <div className="contactright">
          <h1>Get in Touch</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <form>
            <input placeholder="Enter name" />
            <input placeholder="Enter Email" />
            <input placeholder="Subject" />
            <textarea rows={5} cols={35} placeholder="message"></textarea>
            <button>send message</button>
          </form>
        </div>
      </div>{" "}
    </>
  );
};
export default Contact;
