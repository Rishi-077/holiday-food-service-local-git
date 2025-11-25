import styles from "./navbar.module.css";
import images from "../../../../constants/images";
import { IoChevronDown } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { GrLocation } from "react-icons/gr";

function Navbar() {
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
            moveDown ? `${styles.move_down} container` : "container"
          } px-4 mx-auto`}
        >
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between py-3">
              {/* Logo */}
              <div className={`${styles.nav_logo}`}>
                <img src={images.holiday_logo} alt="img" />
              </div>

              {/* Desktop Menu */}
              <div className={`${styles.desktop_menu}`}>
                <ul className={`${styles.nav_ul}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>

                  <li>
                    <div className={`${styles.dropdown}`}>
                      <div className={styles.dropbtn}>
                        Our Solutions <IoChevronDown />
                      </div>
                      <div className={styles.dropdown_content}>
                        <a href="#">Corporate Food Service</a>
                        <a href="#">Boxed Meal</a>
                        <a href="#">Catered Events & Celebrations</a>
                        <a href="#">Family Style Catering</a>
                        <a href="#">Employee Snack Boxes</a>
                        <a href="#">Executive Dining</a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {/* Desktop Sign In Button */}
              <div className={`${styles.desktop_menu}`}>
                <button type="button" className={styles.signin_btn}>
                  Sign In
                </button>
              </div>

              {/* Hamburger Icon */}
              <div
                className={`${styles.hamburger}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className={styles.mobile_menu}>
              <ul>
                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/">Home</Link>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <details>
                    <summary className="px-0">
                      Our Solutions <IoChevronDown />
                    </summary>
                    <div className={styles.mobile_dropdown}>
                       <a href="#">Corporate Food Service</a>
                        <a href="#">Boxed Meal</a>
                        <a href="#">Catered Events & Celebrations</a>
                        <a href="#">Family Style Catering</a>
                        <a href="#">Employee Snack Boxes</a>
                        <a href="#">Executive Dining</a>
                    </div>
                  </details>
                </li>

                <li onClick={() => setMenuOpen(false)}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>

                <li>
                  <button className={styles.signin_btn}>Sign In</button>
                </li>
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
                              <a href="#">
                                <TiSocialTwitter className="primary-text fs-18" />
                              </a>
                            </li>
                            <li className="li-remove px-1">
                              <a href="#">
                                <TiSocialFacebook className="primary-text fs-18" />
                              </a>
                            </li>
                            <li className="li-remove px-1">
                              <a href="#">
                                <TiSocialYoutube className="primary-text fs-18" />
                              </a>
                            </li>
                            <li className="li-remove px-1">
                              <a href="#">
                                <TiSocialLinkedin className="primary-text fs-18" />
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
