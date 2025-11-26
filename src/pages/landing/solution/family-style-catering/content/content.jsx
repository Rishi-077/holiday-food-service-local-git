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
                  Why Family Style?
                </h2>
                <div className="row poppins">
                  <div className="col-12 my-3">
                    <ul>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            {" "}
                            Customizable Menus :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Work with our team to create the perfect spread for
                            your group
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
                            Wide Variety Per Meal :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Multiple dishes mean everyone finds something they
                            love
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
                            Team Bonding Experience :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Sharing meals encourages conversation and connection
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
                            Cost-Effective :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Often more economical than individual meals for
                            larger groups
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
                            Professional Setup :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            We handle all setup, serving utensils, and cleanup
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
                <h2 className="forum black-text text-start">Menu Options</h2>
                <div className="row poppins">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">South Indian Feast</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Authentic Coimbatore flavors with dosas, idlis, sambar,
                      and more
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
                    <h6 className="my-3 my-3">North Indian Spread</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Curries, breads, biryanis, and traditional favorites
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
                    <h6 className="my-3">International Cuisine</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Chinese, Italian, Mexican, and more global options
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
                    <h6 className="my-3">Custom Themes</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Work with us to create your ideal menu combination
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="col-12 mt-3">
              <div>
                <h2 className="forum black-text text-start">
                  Setup and Service
                </h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  Our team arrives before your event to set up beautiful
                  buffet-style stations or table service. All serving utensils,
                  plates, and cleanup are included. You focus on your team while
                  we handle the food.
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
