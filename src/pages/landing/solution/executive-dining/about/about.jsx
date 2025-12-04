import styles from "./about.module.css";
import images from "../../../../../constants/images";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <section className={`${styles.about_section} container-fluid py-5`}>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <div className={`${styles.about_img_div}`}>
                <img src={images.executive_sol} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div>
                {/* <h5 className="poppins primary-text text-start">
                  Executive Dining
                </h5> */}
                <h2 className="poppins black-text text-start">
                  The caliber of your dining experience reflects the standard of
                  your business
                </h2>
                <p className="fs-15 fw-400 poppins dark-text">
                  Our Corporate Executive Dining service is meticulously
                  designed to provide a discreet, premium, and sophisticated
                  environment perfect for critical business engagements, client
                  entertainment, and executive team events. We handle every
                  detail, ensuring the setting and the cuisine perfectly align
                  with your strategic objectives.
                </p>

                <button
                  onClick={() => navigate("/contact-us")}
                  className="btn primary-bg uppercase shadow-none border-0 white-text fs-14 fw-500 poppins py-2 px-4"
                >
                  Get in Touch
                </button>
              </div>

              <div className={`${styles.about_content} mt-lg-0 mt-5`}>
                <div className="row">
                  <div className="col-3 d-lg-block d-none">&nbsp;</div>
                  <div className="col-lg-9 col-12">
                    <div>
                      <h5 className="poppins black-text text-start">
                        Benifits
                      </h5>
                      <div className="d-flex flex-sm-row flex-column align-items-start justify-content-between mt-3 gap-sm-4 gap-0 poppins">
                        <div>
                          <p>
                            {" "}
                            <img
                              src={images.tick}
                              alt="img"
                              className="me-2"
                            />{" "}
                            Enhance Business Relationships
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Guaranteed Discretion
                          </p>
                        </div>
                        <div className="ms-sm-4 ms-0">
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Unmatched Convenience
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Reflect Your Brand Excellence
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
