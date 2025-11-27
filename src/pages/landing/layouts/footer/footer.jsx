import React from "react";
import styles from "./footer.module.css";
import images from "../../../../constants/images";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className={`${styles.footer_section} container-fluid`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12 poppins`}>
          <div className="container ">
            <div className="row py-5">
              <div className="col-lg-3 col-12">
                <div>
                  <div className={`${styles.logo_div}`}>
                    <img src={images.holiday_logo} alt="img" />
                  </div>
                  <p className="fs-14 fw-400 white-text mt-5">
                    So come on board with us and allow us to provide you with
                    once-in-a-lifetime culinary experiences!{" "}
                  </p>
                  <div>
                    <ul
                      className={`d-flex align-items-center ps-0 mb-0 gap-3 ms-0`}
                    >
                      <li className={`li-remove ${styles.footer_social_icon}`}>
                        <a href="#">
                          <TiSocialTwitter className="black-text fs-18" />
                        </a>
                      </li>
                      <li className={`li-remove ${styles.footer_social_icon}`}>
                        <a href="#">
                          <TiSocialFacebook className="black-text fs-18" />
                        </a>
                      </li>
                      <li className={`li-remove ${styles.footer_social_icon}`}>
                        <a href="#">
                          <TiSocialYoutube className="black-text fs-18" />
                        </a>
                      </li>
                      <li className={`li-remove ${styles.footer_social_icon}`}>
                        <a href="#">
                          <TiSocialLinkedin className="black-text fs-18" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12 d-flex justify-content-lg-center mt-lg-0 mt-5">
                <div>
                  <div>
                    <h4 className="white-text mb-1">Quick Links</h4>
                    <div className={styles.horizontal_line}></div>
                  </div>
                  <ul className="ms-0 ps-0 mt-4">
                    <li className="list-remove mb-3">
                      <Link
                        to="/about-us"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/corporate-food-service"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Solutions
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/contact-us"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12 d-flex justify-content-lg-start mt-lg-0 mt-4">
                <div>
                  <div>
                    <h4 className="white-text mb-1">Solutions</h4>
                    <div className={styles.horizontal_line}></div>
                  </div>
                  <ul className="ms-0 ps-0 mt-4">
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/corporate-food-service"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Corporate Food Service
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/boxed-meal"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Boxed Meal
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/event-caters"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Events
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/family-style-catering"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Family Style
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/employee-snacks"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Snack Box
                      </Link>
                    </li>
                    <li className="list-remove mb-3">
                      <Link
                        to="/solution/executive-dining"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        Executive Dining
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-12 d-flex justify-content-lg-center mt-lg-0 mt-4">
                <div>
                  <div>
                    <h4 className="white-text mb-1">Contacts</h4>
                    <div className={styles.horizontal_line}></div>
                  </div>
                  <ul className="ms-0 ps-0 mt-4">
                    <li className="list-remove mb-3 d-flex align-items-start">
                      <div>
                        <FiPhone className="text-warning me-3" />
                      </div>
                      <a
                        href="#"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        +91 96299 95000, 73977 85070
                      </a>
                    </li>
                    <li className="list-remove mb-3 d-flex align-items-start justify-content-start">
                      <div>
                        <MdOutlineMailOutline className="text-warning me-3" />
                      </div>
                      <div>
                        {/* <div>
                          <a
                            href="#"
                            className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                          >
                            gm@holidayresidency.com
                          </a>
                          <span className="white-text">,</span>
                          {"\u00A0 "}
                        </div> */}

                        <div>
                          <a
                            target="_blank"
                            href="mailto:sales@holidayresidency.com"
                            className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                          >
                            sales@holidayresidency.com
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-remove mb-3 d-flex align-items-start">
                      <div>
                        <MdOutlineLocationOn className="text-warning me-3" />
                      </div>
                      <a
                        href="#"
                        className={`fs-16 fw-400 underline-remove ${styles.footer_link}`}
                      >
                        346, Thudiyalur Rd, Saravanampatti, Coimbatore,
                        Tamilnadu-641035, India
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-4">
                <div
                  className={``}
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#ffffff",
                  }}
                ></div>
              </div>
              <div className="col-12 mb-4">
                <h6 className="white-text text-center">
                  @ {new Date().getFullYear()}. Holiday Food Service. All rights
                  reserved
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
