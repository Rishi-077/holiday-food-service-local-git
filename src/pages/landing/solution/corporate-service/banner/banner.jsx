import React from "react";
import styles from "./banner.module.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <section className={`${styles.banner_section} container-fluid py-5`}>
        <div className="container py-2">
          <div className="row">
            <div className="col-12">
              <div className={`${styles.banner_content} poppins`}>
                <h1>Our Solutions</h1>
                <h6 className="text-nowrap mb-0">
                  {" "}
                  <Link to="/">Home</Link> |{" "}
                  <Link to="/solution/corporate-food-service">Corporate Food Services</Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
