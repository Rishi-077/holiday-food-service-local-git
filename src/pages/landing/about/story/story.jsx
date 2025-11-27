import React from "react";
import styles from "./story.module.css";

function Story() {
  return (
    <>
      {" "}
      <section className={`${styles.mission_section} container-fluid py-4`}>
        <div className="container py-2">
          <div className="row">
            {/* Story */}
            <div className="col-12">
              <div>
                <h2 className="poppins black-text text-start">Our Story</h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  We recognized that celebration catering needed a fresh
                  approach that combines quality, variety, and professional
                  service. Organizations wanted exceptional food experiences,
                  and we built Holiday Foodservices to deliver exactly that.
                  <br />
                  <br />
                  Today, we're proud to serve celebrations nationwide,
                  facilitating thousands of memorable events every month while
                  partnering with quality food providers across the country.
                </p>
              </div>
            </div>

            {/* Commitments */}
            <div className="col-12 my-3">
              <div>
                <h2 className="poppins black-text text-start">Our Commitments</h2>
                <div className="row poppins">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Quality Partnerships</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      We partner with the best restaurants, caterers, and food
                      providers to ensure exceptional quality
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3 my-3">Building Connections</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Food brings people together. We create memorable
                      experiences that strengthen relationships and celebrate
                      special moments
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Technology-Driven Service</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Our platform makes ordering simple while providing
                      transparency and control
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Customer Satisfaction</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Your dedicated account manager ensures every meal meets
                      your expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}

            <div className="col-12 mt-3">
              <div>
                <h2 className="poppins black-text text-start">Our Values</h2>
                <div className="row poppins">
                  <div className="col-12 my-3">
                    <ul>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">Quality First :</span>{" "}
                          <span className="fs-15 dark-text">
                            We partner only with restaurants and caterers who
                            meet our high standards
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
                          <span className="fs-15 fw-500">Local Pride :</span>{" "}
                          <span className="fs-15 dark-text">
                            We celebrate Coimbatore's diverse food culture and
                            support local businesses
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
                            Service Excellence :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Dedicated account managers provide personalized
                            attention
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
                          <span className="fs-15 fw-500">Innovation :</span>{" "}
                          <span className="fs-15 dark-text">
                            We continuously improve our technology and service
                            offerings
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
                          <span className="fs-15 fw-500">Reliability :</span>{" "}
                          <span className="fs-15 dark-text">
                            Consistent, on-time delivery and responsive customer
                            support
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
                          <span className="fs-15 fw-500">Inclusivity :</span>{" "}
                          <span className="fs-15 dark-text">
                            Accommodating all dietary needs and preferences
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="col-12 mt-3">
              <div>
                <h2 className="poppins black-text text-start">
                  Health & Safety Standards
                </h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  Holiday Foodservices Safety Standard ensures all our partner
                  restaurants and caterers follow strict food safety protocols.
                  We conduct regular quality checks and maintain the highest
                  standards of hygiene and food handling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Story;
