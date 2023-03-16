import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button/Button";

const ContactForm = () => {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccessMessageDisplayed, setIsSuccessMessageDisplayed] =
    useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
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

    // Set the success message
    setSuccessMessage("Sent successfully!");
    setIsSuccessMessageDisplayed(true);

    // Clear the form input fields
    setFormValues({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setIsSuccessMessageDisplayed(false);
    }, 30000);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2 className="header">Contact Me</h2>
      <input
        type="text"
        placeholder="Enter your Name"
        name="user_name"
        value={formValues.name}
        onChange={(event) =>
          setFormValues({ ...formValues, name: event.target.value })
        }
      />
      <input
        type="email"
        placeholder="Enter your valid email"
        name="user_email"
        value={formValues.email}
        onChange={(event) =>
          setFormValues({ ...formValues, email: event.target.value })
        }
        required
      />
      <textarea
        placeholder="Enter your message"
        name="message"
        value={formValues.message}
        onChange={(event) =>
          setFormValues({ ...formValues, message: event.target.value })
        }
        required
      />
      {isSuccessMessageDisplayed && (
        <div className="success-message">{successMessage}</div>
      )}

      <div className="button-send">
        <Button type="submit" text="Send" />
      </div>
    </form>
  );
};

export default ContactForm;
