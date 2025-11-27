import styles from "./about.module.css";
import images from "../../../../../constants/images";

function About() {
  return (
    <>
      {" "}
      <section className={`${styles.about_section} container-fluid py-5`}>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <div className={`${styles.about_img_div}`}>
                <img src={images.event_sol} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div>
                <h5 className="forum primary-text text-start">
                  Catered Events & Celebrations
                </h5>
                <h2 className="forum black-text text-start">
                  Full-service catering for memorable corporate events
                </h2>
                <p className="fs-15 fw-400 poppins dark-text">
                  From intimate team celebrations to large corporate galas,
                  Coimbatore Caters provides full-service event catering that
                  makes your special occasions unforgettable.
                </p>

                <button className="btn primary-bg uppercase shadow-none border-0 white-text fs-14 fw-500 poppins py-2 px-4">
                  Get in Touch
                </button>
              </div>

              <div className={`${styles.about_content}`}>
                <div className="row">
                  <div className="col-3 d-lg-block d-none">&nbsp;</div>
                  <div className="col-lg-9 col-12">
                    <div>
                      <h5 className="forum black-text text-start">Benifits</h5>

                      <div className="d-flex flex-sm-row flex-column align-items-start justify-content-between mt-3 gap-sm-4 gap-0 poppins">
                        <div>
                          <p>
                            {" "}
                            <img
                              src={images.tick}
                              alt="img"
                              className="me-2"
                            />{" "}
                            Your office or facility
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Hotels and banquet halls
                          </p>
                        </div>
                        <div className="ms-sm-4 ms-0">
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Outdoor events
                          </p>
                          <p>
                            <img src={images.tick} alt="img" className="me-2" />
                            Unique locations
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
