import styles from "./navbar.module.css";
import images from "../../../../constants/images";
import { IoChevronDown } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { GrLocation } from "react-icons/gr";
import useDynamicTextColor from "../../../../hooks/DynamicTextColor";

function Navbar({ menuColor }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [moveDown, setMoveDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setMoveDown(true);
      else setMoveDown(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`container-fluid poppins`}>
        <div
          className={`${styles.nav} ${
            moveDown
              ? `${styles.move_down} container-fluid white-bg`
              : "container-fluid transparent-bg"
          } px-4 mx-auto`}
        >
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between py-1">
              {/* Logo */}
              <div
                className={`${styles.nav_logo}`}
                onClick={() => navigate("/")}
              >
                <img src={images.holiday_logo} alt="img" />
              </div>

              {/* Desktop Menu */}
              <div className={`${styles.desktop_menu}`}>
                <ul className={`${styles.nav_ul}`}>
                  <li>
                    <Link
                      to="/"
                      style={{ color: moveDown ? "#000" : menuColor }}
                      className={`${
                        location.pathname === "/" && "primary-text"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      style={{ color: moveDown ? "#000" : menuColor }}
                      className={`${
                        location.pathname === "/about" && "primary-text"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <div className={`${styles.dropdown}`}>
                      <div
                        style={{ color: moveDown ? "#000" : menuColor }}
                        className={`${styles.dropbtn} ${
                          location.pathname.includes("/solution") &&
                          "primary-text"
                        }`}
                      >
                        Our Solutions{" "}
                        <IoChevronDown
                          className={`${styles.dropbtn} ${
                            location.pathname.includes("/solution") &&
                            "primary-text"
                          }`}
                          style={{ color: moveDown ? "#000" : menuColor }}
                        />
                      </div>
                      <div className={styles.dropdown_content}>
                        <Link
                          onClick={() => setMenuOpen(false)}
                          to="/solution/corporate-food-service"
                          className={`${
                            location.pathname ===
                              "/solution/corporate-food-service" &&
                            "primary-text"
                          }`}
                        >
                          Corporate Food Service
                        </Link>
                        <Link
                          to="/solution/boxed-meal"
                          className={`${
                            location.pathname === "/solution/boxed-meal" &&
                            "primary-text"
                          }`}
                        >
                          Boxed Meal
                        </Link>
                        <Link
                          to="/solution/event-caters"
                          className={`${
                            location.pathname === "/solution/event-caters" &&
                            "primary-text"
                          }`}
                        >
                          Catered Events & Celebrations
                        </Link>
                        <Link
                          to="/solution/family-style-catering"
                          className={`${
                            location.pathname ===
                              "/solution/family-style-catering" &&
                            "primary-text"
                          }`}
                        >
                          Family Style Catering
                        </Link>
                        <Link
                          to="/solution/employee-snacks"
                          className={`${
                            location.pathname === "/solution/employee-snacks" &&
                            "primary-text"
                          }`}
                        >
                          Employee Snack Boxes{" "}
                        </Link>
                        <Link
                          onClick={() => setMenuOpen(false)}
                          to="/solution/executive-dining"
                          className={`${
                            location.pathname ===
                              "/solution/executive-dining" && "primary-text"
                          }`}
                        >
                          Executive Dining
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      style={{ color: moveDown ? "#000" : menuColor }}
                      to="/contact-us"
                      className={`${
                        location.pathname === "/contact-us" && "primary-text"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Desktop Sign In Button */}
              {/* <div className={`${styles.desktop_menu}`}>
                <button type="button" className={styles.signin_btn}>
                  Sign In
                </button>
              </div> */}

              {/* Hamburger Icon */}
              <div
                className={`${styles.hamburger}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <FaTimes style={{ color: moveDown ? "#000" : menuColor }} />
                ) : (
                  <FaBars style={{ color: moveDown ? "#000" : menuColor }} />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className={styles.mobile_menu}>
              <ul>
                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/"
                    className={`${location.pathname === "/" && "primary-text"}`}
                  >
                    Home
                  </Link>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/about"
                    className={`${
                      location.pathname === "/about" && "primary-text"
                    }`}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <details>
                    <summary className="px-0 py-0">
                      Our Solutions <IoChevronDown />
                    </summary>
                    <div className={styles.mobile_dropdown}>
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/corporate-food-service"
                        className={`${
                          location.pathname ===
                            "/solution/corporate-food-service" && "primary-text"
                        }`}
                      >
                        Corporate Food Service
                      </Link>

                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/boxed-meal"
                        className={`${
                          location.pathname === "/solution/boxed-meal" &&
                          "primary-text"
                        }`}
                      >
                        Boxed Meal
                      </Link>
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/event-caters"
                        className={`${
                          location.pathname === "/solution/event-caters" &&
                          "primary-text"
                        }`}
                      >
                        Catered Events & Celebrations
                      </Link>
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/family-style-catering"
                        className={`${
                          location.pathname ===
                            "/solution/family-style-catering" && "primary-text"
                        }`}
                      >
                        Family Style Catering
                      </Link>
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/employee-snacks"
                        className={`${
                          location.pathname === "/solution/employee-snacks" &&
                          "primary-text"
                        }`}
                      >
                        Employee Snack Boxes{" "}
                      </Link>
                      <Link
                        onClick={() => setMenuOpen(false)}
                        to="/solution/executive-dining"
                        className={`${
                          location.pathname === "/solution/executive-dining" &&
                          "primary-text"
                        }`}
                      >
                        Executive Dining
                      </Link>
                    </div>
                  </details>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                  <Link
                    to="/contact-us"
                    className={`${
                      location.pathname === "/contact-us" && "primary-text"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>

                {/* <li>
                  <button className={styles.signin_btn}>Sign In</button>
                </li> */}
                <li className="d-md-none d-block">
                  <div className="row d-flex flex-column">
                    <div className="col-4">
                      {" "}
                      <div className="d-flex align-items-center">
                        <div className={``} style={{ width: 10 }}>
                          <GrLocation className="primary-text fs-16" />
                        </div>
                        <h6 className="fs-15 fw-500 poppins primary-text mb-0 ms-3">
                          Saravanampatti
                        </h6>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="d-flex flex-column align-items-start mt-2 justify-content-start">
                        <h6 className="fs-15 fw-400 primary-text mb-0">
                          Office Timing - Mon to Sun: 9:00am - 6:00pm
                        </h6>
                        <div>
                          <ul
                            className={`${styles.home_ul} d-flex align-items-center ps-0 mb-0 gap-1 ms-0`}
                          >
                            <li className="li-remove px-1">
                              <a
                                href="https://www.instagram.com/holiday_residency/"
                                target="_black"
                              >
                                <TiSocialInstagram className="primary-text fs-18" />
                              </a>
                            </li>
                            <li className="li-remove px-1">
                              <a
                                href="https://www.facebook.com/HolidayResidencyOfficial"
                                target="_black"
                              >
                                <TiSocialFacebook className="primary-text fs-18" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
