import React from "react";
import styles from "./content.module.css";
import images from "../../../../../constants/images";

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
                            {" "}
                            Custom Event Menus :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Designed specifically for your occasion and guests
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
                            Professional Staffing :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Servers, bartenders, and event coordinators
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
                            Bar Service Available :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Full bar, wine service, or signature cocktails
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
                            Equipment Rental :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Tables, chairs, linens, and decor
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
                            Day-of Coordination :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            We manage all details so you can enjoy your event
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

            {/* image */}

            <div className="col-12">
              <div className={`${styles.group_img_div}`}>
                <img src={images.group_img} alt="img" />
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
                    <h6 className="my-3">Corporate Parties</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Year-end celebrations, milestone achievements, and company
                      anniversaries
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
                    <h6 className="my-3 my-3">Team Celebrations</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Project completions, promotions, and team victories
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
                      Project completions, promotions, and team victories
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
                    <h6 className="my-3">Outdoor Gatherings</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Picnics, sports days, and team outings
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
