import React from "react";
import Banner from "./banner/banner";
import ContactForm from "../home/contact/contact";
import ContactDetails from "./contact-details/contact-details";

function Contact() {
  return (
    <>
      <Banner />
      <ContactDetails />
      <ContactForm />
    </>
  );
}

export default Contact;
