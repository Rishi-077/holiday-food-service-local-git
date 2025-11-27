import styles from "./client.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import images from "../../../../constants/images";
import useScreenWidth from "../../../../hooks/useScreenWidth";
import { useState } from "react";
function Client() {
  const width = useScreenWidth();

  const [tab, setTab] = useState("employee_choice");
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
                {/* <h5 className="poppins primary-text text-center">Our Clients</h5> */}
                <h2 className="poppins black-text text-center">
                  Our Trusted Clients
                </h2>
              </div>
              {/* <div className="col-12">
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
              </div> */}

              <div className="col-12">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_8} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_7} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_6} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_5} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_4} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_3} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_2} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-12 my-3">
                    <div className={`card ${styles.logo_card}`}>
                      <div className="card-body">
                        <div className={`${styles.client_logo_div}`}>
                          <img src={images.company_1} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
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
                    Corporate Catering, Simplified
                  </h4>
                  <div className="mt-5">
                    <h5 className="fs-20 fw-500 py-2">
                      We offer two flexible approaches to workplace dining.
                      Choose how to order
                    </h5>
                    <h5
                      className={`fs-20 fw-400 cursor-pointer ${
                        tab == "employee_choice" ? "primary-text" : "black-text"
                      } py-2`}
                      onClick={() => setTab("employee_choice")}
                    >
                      Meals Chosen by Your Team
                    </h5>
                    <div
                      style={{
                        width: "70%",
                        height: "3px",
                        backgroundColor:
                          tab == "employee_choice"
                            ? "var(--primary)"
                            : "transparent",
                      }}
                    ></div>
                    <h5
                      className={`fs-20 fw-400 cursor-pointer ${
                        tab == "expert_curation" ? "primary-text" : "black-text"
                      } py-2`}
                      onClick={() => setTab("expert_curation")}
                    >
                      Meals Planned by Our Experts
                    </h5>
                    <div
                      style={{
                        width: "70%",
                        height: "3px",
                        backgroundColor:
                          tab == "expert_curation"
                            ? "var(--primary)"
                            : "transparent",
                      }}
                    ></div>

                    <div className={`${styles.client_side_img_div}`}>
                      <img src={images.client_side_img} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              {tab == "employee_choice" && (
                <div className="col-lg-7 mt-lg-0 mt-5">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_1} alt="img" />
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
                        Establish your meal schedule and set subsidy parameters
                        with ease. Administrators gain full visibility into
                        spending patterns and order analytics through real-time
                        tracking.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_2} alt="img" />
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
                        Let your team select and customize their menu
                      </h4>
                      <p className={`${styles.client_p} fs-16`}>
                        Whether planning meals for the week ahead or ordering
                        the day before, your employees enjoy complete
                        flexibility. Our comprehensive menus accommodate all
                        dietary preferences and restrictions.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_3} alt="img" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`${styles.client_h4}  fs-20 fw-500`}>
                        Seamless Delivery & Organization
                      </h4>
                      <p className={`${styles.client_p} fs-16`}>
                        Eliminate lunchtime disruption. Each meal arrives
                        individually packaged and professionally organized. Our
                        dedicated delivery team arranges everything in your
                        designated space for an efficient grab-and-go
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {tab == "expert_curation" && (
                <div className="col-lg-7 mt-lg-0 mt-5">
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_1} alt="img" />
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
                        Provide Your Requirements
                      </h4>
                      <p className={`${styles.client_p} fs-16`}>
                        Share your budget, headcount, and any dietary
                        considerations. Whether you need ongoing daily service
                        or a single event, our platform retains your "Taste
                        Profile" to ensure consistent quality with every order.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_2} alt="img" />
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
                        Experience Chef-Curated Variety
                      </h4>
                      <p className={`${styles.client_p} fs-16`}>
                        Eliminate menu fatigue with rotating selections designed
                        by our expert culinary team. Every menu addresses
                        diverse dietary needs and preferences while maintaining
                        exceptional quality and variety.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="d-flex align-items-center flex-column justify-content-start me-4">
                      <div>
                        <img src={images.TBD_3} alt="img" />
                      </div>
                    </div>
                    <div>
                      <h4 className={`${styles.client_h4}  fs-20 fw-500`}>
                        Seamless Delivery & Organization
                      </h4>
                      <p className={`${styles.client_p} fs-16`}>
                        Eliminate lunchtime disruption. Each meal arrives
                        individually packaged and professionally organized. Our
                        dedicated delivery team arranges everything in your
                        designated space for an efficient grab-and-go
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
