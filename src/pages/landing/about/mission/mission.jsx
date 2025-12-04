import React from "react";
import styles from "./mission.module.css";
import images from "../../../../constants/images";
import { BsGlobe2 } from "react-icons/bs";

function Mission() {
  return (
    <>
      {" "}
      <section className={`${styles.mission_section} container-fluid py-5`}>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-6">
              <div className={`${styles.mission_img_div}`}>
                <img src={images.about_mission} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div>
                {/* <h5 className="poppins primary-text text-start">Our Mission</h5> */}
                <h2 className="poppins black-text text-start">
                  “Bringing Kongu Nadu’s hospitality into the corporate space.”
                </h2>
                <p className="fs-15 fw-400 poppins dark-text">
                  At Holiday Food Services, we believe that shared meals create
                  stronger connections and memorable celebrations. Our mission
                  is to make every occasion special by providing exceptional
                  food services with professional coordination and reliable
                  delivery.
                </p>

                <div className="poppins row">
                  <div className="col-sm-6 col-12 d-flex flex-row align-items-center text-center mt-4">
                    <div className={`${styles.mission_vector_bg} me-3`}>
                      <img src={images.about_vector_1} alt="img" />
                    </div>
                    <h6 className="text-start lh-base">
                      Best Catering Service {new Date().getFullYear()}
                    </h6>
                  </div>
                  <div className="col-sm-6 col-12 d-flex flex-row align-items-center text-center mt-4">
                    <div className={`${styles.mission_vector_bg} me-3`}>
                      <img src={images.about_vector_2} alt="img" />
                    </div>
                    <h6 className="text-start lh-base">
                      Excellence in Celebration Services
                    </h6>
                  </div>
                  <div className="col-sm-6 col-12 d-flex flex-row align-items-center text-center mt-4">
                    <div className={`${styles.mission_vector_bg} me-3`}>
                      <img src={images.about_vector_3} alt="img" />
                    </div>
                    <h6 className="text-start lh-base">
                      Outstanding Customer Service Award
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row poppins">
            <div className="col-12">
              <div
                className={`${styles.mission_bg} d-flex flex-lg-row flex-column justify-content-between  align-items-lg-center align-items-start mt-5`}
              >
                {/* <div className="d-flex flex-column align-items-lg-start align-items-start pb-lg-0 pb-3">
                  <h4>100+</h4>
                  <h6 className="fs-15 fw-400 mt-lg-3 mt-0 ms-lg-0">
                    Restaurant Partners
                  </h6>
                </div> */}
                <div className="d-flex flex-column align-items-lg-start align-items-start pb-lg-0 pb-3">
                  <h4>50+</h4>
                  <h6 className="fs-15 fw-400 mt-lg-3 mt-0 ms-lg-0">
                    Corporate Clients
                  </h6>
                </div>
                <div className="d-flex flex-column align-items-lg-start align-items-start pb-lg-0 pb-3">
                  <h4>5,000+</h4>
                  <h6 className="fs-15 fw-400 mt-lg-3 mt-0 ms-lg-0">
                    Events Catered
                  </h6>
                </div>
                <div className="d-flex flex-column align-items-lg-start align-items-start pb-lg-0 pb-3">
                  <h4>99%</h4>
                  <h6 className="fs-15 fw-400 mt-lg-3 mt-0 ms-lg-0">
                    Customer Satisfaction
                  </h6>
                </div>
                {/* <div className="d-flex flex-column align-items-lg-start align-items-start pb-lg-0">
                  <div>
                    <BsGlobe2 className="fs-25" />
                  </div>
                  <h6 className="fs-15 fw-400 mt-lg-3 mt-3 ms-lg-0">
                    Service Coverage
                  </h6>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
