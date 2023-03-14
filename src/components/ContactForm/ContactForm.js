import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button/Button";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ltrfrbi",
        "template_gf910vw",
        form.current,
        "zCTaDNZHJFjgXb9vf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button type="submit" text="Send" />
    </form>
  );
};

export default ContactForm;
