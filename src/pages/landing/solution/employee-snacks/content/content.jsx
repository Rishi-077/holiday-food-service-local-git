import React from "react";
import styles from "./content.module.css";

function Content() {
  return (
    <>
      {" "}
      <section className={`${styles.mission_section} container-fluid py-4`}>
        <div className="container py-2">
          <div className="row">
            {/* Values */}

            <div className="col-12 mt-3">
              <div>
                <h2 className="forum black-text text-start">
                  Why Choose Boxed Meals?
                </h2>
                <div className="row poppins">
                  <div className="col-12 my-3">
                    <ul>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            Customizable Selection :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Choose snacks based on your team's preferences and
                            dietary needs
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ECEDF1",
                            height: "2px",
                            width: "40%",
                            marginTop: "15px",
                          }}
                        ></div>
                      </li>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            Regular Replenishment :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Weekly, bi-weekly, or monthly delivery schedules
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ECEDF1",
                            height: "2px",
                            width: "40%",
                            marginTop: "15px",
                          }}
                        ></div>
                      </li>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            Healthy Options :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Nutritious snacks alongside traditional favorites
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ECEDF1",
                            height: "2px",
                            width: "40%",
                            marginTop: "15px",
                          }}
                        ></div>
                      </li>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            {" "}
                            Budget Management :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Flexible plans that fit your budget
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ECEDF1",
                            height: "2px",
                            width: "40%",
                            marginTop: "15px",
                          }}
                        ></div>
                      </li>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            {" "}
                            One-Stop Solution :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            We manage inventory, delivery, and restocking
                          </span>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#ECEDF1",
                            height: "2px",
                            width: "40%",
                            marginTop: "15px",
                          }}
                        ></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Commitments */}
            <div className="col-12 my-3">
              <div>
                <h2 className="forum black-text text-start">
                  Snack Categories
                </h2>
                <div className="row poppins">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Healthy Choices</h6>
                    <ul className="poppins dark-text fs-15 fw-400 mt-3">
                      <li>Fresh fruits</li>
                      <li>Nuts and trail mixes</li>
                      <li>Protein bars</li>
                      <li>Dried fruits</li>
                      <li>Yogurt and smoothies</li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Traditional Favorites</h6>
                    <ul className="poppins dark-text fs-15 fw-400 mt-3">
                      <li>Chips and namkeen</li>
                      <li>Cookies and biscuits</li>
                      <li>Chocolates</li>
                      <li>Instant noodles</li>
                      <li>Candy and sweets</li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Beverages</h6>
                    <ul className="poppins dark-text fs-15 fw-400 mt-3">
                      <li>Coffee and tea</li>
                      <li>Fresh juices</li>
                      <li>Soft drinks</li>
                      <li>Energy drinks</li>
                      <li>Bottled water</li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Local Specialties</h6>
                    <ul className="poppins dark-text fs-15 fw-400 mt-3">
                      <li> South Indian snacks</li>
                      <li>Regional favorites</li>
                      <li>Artisan products</li>
                      <li>Specialty items</li>
                      <li>Seasonal offerings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="col-12 mt-3">
              <div>
                <h2 className="forum black-text text-start">
                  Integration with Meal Programs
                </h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  Combine snack delivery with our other catering services for a
                  complete food solution. Your account manager will coordinate
                  everything seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
