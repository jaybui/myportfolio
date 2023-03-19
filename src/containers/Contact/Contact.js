import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import githubLogo from "./GitHub-Logo.svg";
import linkedinLogo from "./LinkedIn-Logo.svg";
import gmailLogo from "./Gmail-Logo.svg";
import twitterLogo from "./Twitter-Logo.svg";
import instagramLogo from "./Instagram-Logo.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
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
            <ul className="social-links">
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
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
