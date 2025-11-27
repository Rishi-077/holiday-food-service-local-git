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
                <h2 className="poppins black-text text-start">Key Features:</h2>
                <div className="row poppins">
                  <div className="col-12 my-3">
                    <ul>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            {" "}
                            The Power of Choice :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            We believe great corporate food should offer
                            flexibility. We offer two distinct, powerful
                            approaches to workplace dining, both backed by
                            reliable service and centralized analytics.
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
                            Individualized Empowerment :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Maximize personal satisfaction. Employees select
                            meals tailored to their individual preferences and
                            dietary needs from our vetted restaurant network.
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
                            Streamlined Group Service :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Simplify planning for high-volume needs. Our
                            culinary specialists design a constantly rotating,
                            ideal menu for your organization, compliant with all
                            group restrictions.
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
                <h2 className="poppins black-text text-start">Perfect For:</h2>
                <div className="row poppins">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">Regular Morning Breakfast</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Quick, energizing, and easily customizable
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
                    <h6 className="my-3 my-3">Afternoon Curated Meals</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Balanced, high-quality group meals
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
                    <h6 className="my-3">Evening Snacks</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Light, fresh options for training sessions or working
                      late.
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
                    <h6 className="my-3">Working Dinner</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Full, hot meals designed to support late-night
                      productivity.
                    </p>
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

export default Content;
