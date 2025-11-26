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
                          <span className="fs-15 fw-500"> Quick Setup :</span>{" "}
                          <span className="fs-15 dark-text">
                            Grab and go - no buffet lines or wait times
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
                            Clear Allergen Labeling :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Every box clearly lists ingredients and dietary
                            information
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
                            Dietary Accommodations :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Easily identify vegetarian, vegan, gluten-free
                            options
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
                            No Buffet Lines :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Perfect for time-sensitive meetings and events
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
                            Efficient Distribution :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Pre-labeled boxes make handout simple
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
                <h2 className="forum black-text text-start">Menu Variety</h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  Choose from dozens of options including vegetarian,
                  non-vegetarian, regional specialties, and international
                  cuisines. Our menu rotates regularly to keep things
                  interesting.
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
