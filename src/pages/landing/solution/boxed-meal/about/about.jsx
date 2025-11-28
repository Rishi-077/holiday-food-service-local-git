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
                <img src={images.boxed_sol} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div>
                {/* <h5 className="poppins primary-text text-start">Boxed Meal</h5> */}
                <h2 className="poppins black-text text-start">
                  Individually packaged meals perfect for meetings and busy
                  workdays
                </h2>
                <p className="fs-15 fw-400 poppins dark-text">
                  Boxed meals offer the perfect solution for busy workdays,
                  client meetings, and events where efficiency matters. Each
                  meal is individually packaged, labeled, and ready to enjoy.
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
                            Board meetings
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Conference attendees
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Working lunches
                          </p>
                        </div>
                        <div className="ms-sm-4 ms-0">
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Training sessions
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Outdoor events
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Site visits
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
