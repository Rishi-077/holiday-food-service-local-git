import Navbar from "../../layouts/navbar/navbar";
import About from "./about/about";
import Banner from "./banner/banner";
import Content from "./content/content";

function CorporateService() {
  return (
    <>
      <Navbar menuColor={"#fff"} />
      <Banner />
      <About />
      <Content />
    </>
  );
}

export default CorporateService;
