import React from "react";
import styles from "./choose-us.module.css";
import images from "../../../../constants/images";

function ChooseUs() {
  return (
    <section className={`${styles.choose_us_section} container-fluid pb-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                <h5 className="forum primary-text text-center">
                  Why Choose Us
                </h5>
                <h2 className="forum black-text text-center">
                  Why Choose Holiday Food Service
                </h2>
                <div className="mt-4 poppins">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12 py-2 text-center ">
                      <div className={`${styles.choose_us}`}>
                        <img src={images.choose_us_1} alt="img" />
                      </div>
                      <div
                        className={`${styles.choose_us_vector_bg} mx-auto mt-3`}
                      >
                        <img src={images.choose_us_vector_3} alt="img" />
                      </div>
                      <div>
                        <h6 className="mt-2 fs-20">Expert Planning</h6>
                        <p className="fs-16 fw-500 dark-text">
                          Professional event coordination and planning for every
                          celebration
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 py-2 text-center">
                      <div className={`${styles.choose_us}`}>
                        <img src={images.choose_us_2} alt="img" />
                      </div>
                      <div
                        className={`${styles.choose_us_vector_bg} mx-auto mt-3`}
                      >
                        <img src={images.choose_us_vector_2} alt="img" />
                      </div>
                      <div>
                        <h6 className="mt-2 fs-20">Local Partnerships</h6>
                        <p className="fs-16 fw-500 dark-text">
                          Professional event coordination and planning for every
                          celebration
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 py-2 text-center">
                      <div className={`${styles.choose_us}`}>
                        <img src={images.choose_us_3} alt="img" />
                      </div>
                      <div
                        className={`${styles.choose_us_vector_bg} mx-auto mt-3`}
                      >
                        <img src={images.choose_us_vector_2} alt="img" />
                      </div>
                      <div>
                        <h6 className="mt-2 fs-20">Custom Menus</h6>
                        <p className="fs-16 fw-500 dark-text">
                          Tailored to your needs and preferences for every
                          occasion
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 py-2 text-center">
                      <div className={`${styles.choose_us}`}>
                        <img src={images.choose_us_4} alt="img" />
                      </div>
                      <div
                        className={`${styles.choose_us_vector_bg} mx-auto mt-3`}
                      >
                        <img src={images.choose_us_vector_1} alt="img" />
                      </div>
                      <div>
                        <h6 className="mt-2 fs-20">Reliable Service</h6>
                        <p className="fs-16 fw-500 dark-text">
                          Timely, professional delivery and exceptional service
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
  );
}

export default ChooseUs;
