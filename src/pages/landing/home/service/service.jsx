import React from "react";
import styles from "./service.module.css";
import images from "../../../../constants/images";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  return (
    <section className={`${styles.service_section} container-fluid py-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                {/* <h5 className="poppins primary-text text-start">Services</h5> */}
                <h2 className="poppins black-text text-start">
                  Our Catering Solutions
                </h2>
              </div>
            </div>
            <div className="row h-100 d-flex flex-wrap align-items-stretch poppins">
              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_corporate} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">Corporate Food Service</h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Delivering exceptional culinary experiences directly to
                      your workplace.
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        Customizable menus for diverse tastes
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Fresh, high-quality ingredients
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Flexible subsidy options
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Boost employee morale and productivity
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/solution/corporate-food-service")
                      }
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_boxed} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">Boxed Meal</h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Individually packaged meals perfect for meetings and
                      grab-and-go convenience.
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        {" "}
                        Quick setup and easy cleanup
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Wide variety per meal
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Dietary accommodations available
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Efficient distribution for any group size
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => navigate("/solution/boxed-meal")}
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_event} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">
                      Catered Events & Celebrations
                    </h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Impeccable presentation and culinary artistry
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        Custom event menus crafted to perfection
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Professional and impeccable service
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Bar service available upon request
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Day-of coordination for a stress-free event
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => navigate("/solution/event-caters")}
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_family} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">Family Style Catering</h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Communal dining experience with shared platters, perfect
                      for team bonding.
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        Wide variety per meal to please everyone
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Team bonding experience fostered
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        {" "}
                        Cost-effective solution for groups
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/solution/family-style-catering")
                      }
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_employee} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">Employee Snack Boxes</h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Keep your office stocked with curated and delicious snack
                      options.
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        Customizable selection to fit preferences
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Regular replenishment service
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Healthy options available
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Budget management and reporting
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => navigate("/solution/empoyee-snacks")}
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 my-2 d-flex">
                <div className={`card h-100 w-100 ${styles.service_card}`}>
                  <div className="card-body d-flex flex-column">
                    <div className={`${styles.serive_img}`}>
                      <img src={images.solution_snacks} alt="img" />
                    </div>
                    <h3 className="mt-4 fs-20">Executive Dining</h3>
                    <h6 className="fw-400 py-3 fs-16 dark-text">
                      Elevated dining experiences designed for executive
                      meetings and VIP guests.
                    </h6>
                    <ul className="fs-18 fw-400 flex-grow-1">
                      <li className="py-2 fs-16 dark-text">
                        Bespoke menus with premium ingredients
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Discreet and professional service
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Private dining options available
                      </li>
                      <li className="py-2 fs-16 dark-text">
                        Exceptional presentation and artistry
                      </li>
                    </ul>
                    <button
                      type="button"
                      onClick={() => navigate("/solution/executive-dining")}
                      className={`${styles.service_btn}`}
                    >
                      Learn More
                    </button>
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

export default Service;
