import React from "react";
import Banner from "./banner/banner";
import ContactForm from "../home/contact/contact";
import ContactDetails from "./contact-details/contact-details";
import Navbar from "../layouts/navbar/navbar";

function Contact() {
  return (
    <>
      <Navbar menuColor={"#fff"} />
      <Banner />
      <ContactDetails />
      <ContactForm />
    </>
  );
}

export default Contact;
