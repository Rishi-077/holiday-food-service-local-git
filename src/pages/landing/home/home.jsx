import Banner from "./banner/banner";
import ChooseUs from "./choose-us/choose-us";
import Client from "./client/client";
import Service from "./service/service";
import Offer from "./offer/offer";
import Review from "./review/review";
import ContactForm from "./contact/contact";
import Hero from "./hero/hero";
import Navbar from "../layouts/navbar/navbar";
import { Element } from "react-scroll";
function Home() {
  return (
    <>
      <Navbar menuColor={"#000"} />
      <Hero />
      <Service />
      <ChooseUs />
      <Client />
      <Offer />
      <Element name="contact-form">
        <ContactForm />
      </Element>
      <Review />
    </>
  );
}

export default Home;
