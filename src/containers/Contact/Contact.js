import React, { useState } from "react";
import "./Contact.css";
import githubLogo from "./GitHub-Logo.svg";
import linkedinLogo from "./LinkedIn-Logo.svg";
import gmailLogo from "./Gmail-Logo.svg";
import twitterLogo from "./Twitter-Logo.svg";
import instagramLogo from "./Instagram-Logo.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to the server or API here
    console.log({ name, email, message });
    // clear the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <span className="logo-signs">&lt; </span>
        <h1 className="contact-text-header">Let's Chat.</h1>
        <span className="logo-signs"> /&gt;</span>
      </div>
      <div className="contact-body">
        <div className="contact-text-all">
          <h2 className="contact-text-subheader">Tell me about your ideas.</h2>
          <p className="contact-text-p">We'll create something together ✌🏻</p>
          <div className="logo-social-media">
            <ul class="social-links">
              <li>
                <a href="https://github.com/jaybui">
                  <img
                    src={githubLogo}
                    alt="Github Logo"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jay-bui-b1413b181/">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn Logo"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:pewchew26@gmail.com">
                  <img
                    src={gmailLogo}
                    alt="Gmail Logo"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <img
                    src={twitterLogo}
                    alt="Twitter Logo"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img
                    src={instagramLogo}
                    alt="Instagram Logo"
                    width="32"
                    height="32"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
