import Banner from "./banner/banner";
import ChooseUs from "./choose-us/choose-us";
import Client from "./client/client";
import Service from "./service/service";
import Offer from "./offer/offer";
import Review from "./review/review";
import ContactForm from "./contact/contact";
function Home() {
  return (
    <>
      <Banner />
      <Service />
      <ChooseUs />
      <Client />
      <Offer />
      <ContactForm />
      <Review />
    </>
  );
}

export default Home;
