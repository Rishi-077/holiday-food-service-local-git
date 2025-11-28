import React from "react";
import Banner from "./banner/banner";
import Mission from "./mission/mission";
import Story from "./story/story";
import Partner from "./partner/partner";
import Navbar from "../layouts/navbar/navbar";

function About() {
  return (
    <>
      <Navbar menuColor={"#fff"} />
      <Banner />
      <Mission />
      <Story />
      <Partner />
    </>
  );
}

export default About;
