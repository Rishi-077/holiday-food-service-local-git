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
                <h2 className="poppins black-text text-start">
                  Why Choose Executive Dining?
                </h2>
                <div className="row poppins">
                  <div className="col-12 my-3">
                    <ul>
                      <li>
                        <div className="mt-3">
                          <span className="fs-15 fw-500">
                            {" "}
                            Bespoke Culinary Design :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Customized multi-course menus crafted by world-class
                            chefs, tailored to your guests' preferences and the
                            nature of the event.
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
                            Discreet White-Glove Service :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Our dedicated service staff operates with the utmost
                            professionalism and discretion, ensuring
                            uninterrupted focus on your business conversation.
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
                            Ideal Setting for Strategy :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Access to private dining spaces or exclusive on-site
                            setups that guarantee privacy, comfort, and an
                            atmosphere conducive to relationship building.
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
                            Global Palate Accommodation :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Effortless integration of specialized diets,
                            high-profile allergies, and international culinary
                            preferences, handled with uncompromising attention
                            to detail.
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
                            Seamless Event Integration :
                          </span>{" "}
                          <span className="fs-15 dark-text">
                            Complete logistical management, from wine pairings
                            and table settings to post-event cleanup.
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
                <h2 className="poppins black-text text-start">Perfect For</h2>
                <div className="row poppins">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div
                      style={{
                        width: "100%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>
                    <h6 className="my-3">High-Stakes Client Entertainment</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Impress key clients and secure pivotal agreements in a
                      distinguished, controlled setting.
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
                    <h6 className="my-3 my-3">Executive Board Meetings</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Provide an unparalleled experience for leadership during
                      critical corporate gatherings
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
                    <h6 className="my-3">Strategic Team Building</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Reward and engage senior staff with a sophisticated dining
                      experience.
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
                    <h6 className="my-3">VIP Corporate Events</h6>
                    <p className="poppins fs-15 fw-400 mt-3">
                      Hosting dignitaries or special guests where presentation
                      and discretion are paramount.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards */}
            <div className="col-12 mt-3">
              <div>
                <h2 className="poppins black-text text-start">
                  Cultivate Exceptional Relationships
                </h2>
                <p className="poppins fs-15 fw-400 mt-3">
                  <span className="fw-500">Ready to host your next pivotal business meal? </span>{" "}
                  Elevate your client entertaining and executive gatherings with
                  an experience that speaks volumes about your commitment to
                  excellence.
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
