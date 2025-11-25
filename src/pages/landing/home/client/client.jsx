import React, { use } from "react";
import styles from "./client.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import images from "../../../../constants/images";
import useScreenWidth from "../../../../hooks/useScreenWidth";
function Client() {
  const width = useScreenWidth();
  return (
    <section
      className={`${styles.client_section} container-fluid overflow-x-hidden`}
    >
      <div className="row">
        {/* topbar */}
        <div className={`col-12 ${styles.client_swiper_section} py-5`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                <h5 className="forum primary-text text-center">Our Clients</h5>
                <h2 className="forum black-text text-center">
                  Our Trusted Clients
                </h2>
              </div>
              <div className="col-12">
                <div>
                  <Swiper
                    slidesPerView={
                      width < 768 && width > 576 ? 2 : width < 576 ? 1 : 4
                    }
                    spaceBetween={30}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    pagination={{
                      clickable: true,
                    }}
                    className={`${styles.client_slide}`}
                  >
                    <SwiperSlide>
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_1} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_2} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_3} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_4} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_5} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_6} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_7} alt="img" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.client_logo_div}`}>
                        <img src={images.company_8} alt="img" />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 py-5">
          <div className="container py-5 poppins">
            <div className="row">
              <div className="col-lg-5">
                <div>
                  <h4 className="fw-500 fs-20">
                    Two convenient ways to order our corporate catering
                    services:
                  </h4>
                  <div className="mt-5">
                    <h5 className="fs-20 fw-500 py-2">Choose how you order:</h5>
                    <h5 className="fs-20 fw-400 primary-text py-2">
                      Meals chosen by your Team
                    </h5>
                    <h5 className="fs-20 fw-400 py-2">
                      Meals Planned by Our experts
                    </h5>
                    <div
                      style={{
                        width: "70%",
                        height: "3px",
                        backgroundColor: "var(--primary)",
                      }}
                    ></div>

                    <div className={`${styles.client_side_img_div}`}>
                      <img src={images.client_side_img} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 mt-lg-0 mt-5">
                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center flex-column justify-content-start me-4">
                    <div>
                      <img
                        src={images.TBD_1}
                        alt="img
                    "
                      />
                    </div>
                    <div
                      style={{
                        width: 3,
                        height: "150px",
                        backgroundColor: "#EAEAEB",
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className={`${styles.client_h4} fs-20 fw-500`}>
                      Set your schedule and budget
                    </h4>
                    <p className={`${styles.client_p} fs-16`}>
                      Set your meal schedule and subsidy amounts and invite your
                      team members to join your group. Team admins can segment
                      your staff into different groups and track order details.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center flex-column justify-content-start me-4">
                    <div>
                      <img
                        src={images.TBD_2}
                        alt="img
                    "
                      />
                    </div>
                    <div
                      style={{
                        width: 3,
                        height: "150px",
                        backgroundColor: "#EAEAEB",
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className={`${styles.client_h4}  fs-20 fw-500`}>
                      Let your team select and customize their meals
                    </h4>
                    <p className={`${styles.client_p} fs-16`}>
                      Team members can place their orders for the week all at
                      once, or wait until the night before to make each
                      selection. We’ll plan different restaurants and corporate
                      caterers for every meal and curate menus with options for
                      every dietary preference.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center flex-column justify-content-start me-4">
                    <div>
                      <img
                        src={images.TBD_3}
                        alt="img
                    "
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className={`${styles.client_h4}  fs-20 fw-500`}>
                      Enjoy personalized meals with streamlined delivery
                    </h4>
                    <p className={`${styles.client_p} fs-16`}>
                      Meals are individually wrapped and labeled with employee
                      names and organized so they’re easy to find for quick and
                      convenient grab-n-go. Our restaurants and corporate
                      caterers organize delivery and set up your team’s meals in
                      a designated space in your office.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.circle_img}`}>
        <img src={images.half_circle} alt="img" />
      </div>
    </section>
  );
}

export default Client;
