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
                <img src={images.family_sol} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div>
                {/* <h5 className="poppins primary-text text-start">
                  Family Style Catering
                </h5> */}
                <h2 className="poppins black-text text-start">
                  Communal dining experience with shared platters
                </h2>
                <p className="fs-15 fw-400 poppins dark-text">
                  Family-style catering creates a warm, communal dining
                  experience where your team shares delicious food together.
                  It's perfect for building connections and fostering
                  collaboration.
                </p>

                <button
                  onClick={() => navigate("/contact-us")}
                  className="btn primary-bg uppercase shadow-none border-0 white-text fs-14 fw-500 poppins py-2 px-4"
                >
                  Get in Touch
                </button>
              </div>

              <div className={`${styles.about_content}`}>
                <div className="row">
                  <div className="col-3 d-lg-block d-none">&nbsp;</div>
                  <div className="col-lg-9 col-12">
                    <div>
                      <h5 className="poppins black-text text-start">
                        Benefits
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
                            Team Celebrations
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Quarterly meetings
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Workshop lunches
                          </p>
                        </div>
                        <div className="ms-sm-4 ms-0">
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Quarterly meetings
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Client entertainment
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
