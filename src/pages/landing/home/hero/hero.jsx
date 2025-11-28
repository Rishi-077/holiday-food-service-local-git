import React from "react";
import styles from "./hero.module.css";
import { Link } from "react-scroll";
import images from "../../../../constants/images";
function Hero() {
  return (
    <>
      {" "}
      <section className={`${styles.hero_section} container-fluid px-0`}>
        <div className="d-flex align-items-center justify-content-start w-100 h-100">
          <div className="container text-start">
            <div className={`${styles.hero_section_content}`}>
              <h1 className={`${styles.home_title} poppins`}>
                Premium Food Services for Every Celebration
              </h1>

              <p className={`${styles.home_p} fw-400 my-4 poppins`}>
                From Corporate Events To Holiday Gatherings, We Bring People
                Together With Exceptional Food
              </p>

              <Link
                to="contact-form"
                smooth={true}
                duration={500}
                style={{ zIndex: 3 }}
              >
                <button
                  className={`${styles.hero_btn} cursor-pointer uppercase mt-3 btn primary-bg white-text shadow-none border-0 poppins`}
                  style={{ zIndex: 3 }}
                >
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.img_div_6}`}>
          <img src={images.hero_6} alt="img" />
        </div>

        <div className={`${styles.vector_bg}`}>
          <div className={`${styles.img_div_1}`}>
            <img src={images.hero_1} alt="img" />
          </div>
          <div className={`${styles.img_div_2}`}>
            <img src={images.hero_2} alt="img" />
          </div>
        </div>

        <div className={`${styles.img_div_3}`}>
          <img src={images.hero_3} alt="img" />
        </div>
        <div className={`${styles.img_div_4}`}>
          <img src={images.hero_4} alt="img" />
        </div>
        <div className={`${styles.img_div_5}`}>
          <img src={images.hero_5} alt="img" />
        </div>
      </section>
    </>
  );
}

export default Hero;
