import styles from "./review.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import images from "../../../../constants/images";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import useScreenWidth from "../../../../hooks/useScreenWidth";

function Review() {
  const width = useScreenWidth();
  return (
    <section className={`${styles.review_section} container-fluid py-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                <h5 className="forum primary-text text-center">Reviews</h5>
                <h2 className="forum black-text text-center">
                  What Our Clients Say
                </h2>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12">
                <div className={styles.swiper_wrapper}>
                  <div className="prev-btn custom-nav">
                    <FaChevronLeft />
                  </div>

                  <Swiper
                    slidesPerView={
                      width < 1300 && width > 992
                        ? 2
                        : width <= 992 && width > 768
                        ? 1
                        : width <= 768 && width > 576
                        ? 1
                        : width <= 576
                        ? 1
                        : 3
                    }
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    //   autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    //   }}
                    navigation={{
                      nextEl: ".next-btn",
                      prevEl: ".prev-btn",
                    }}
                    modules={[Autoplay, Navigation]}
                    className={`${styles.review_swiper}`}
                  >
                    <SwiperSlide>
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Sarah Johnson
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “As a company that orders lunch every day,
                              reliability is key—and Holiday Food Services
                              delivers. Great food, punctual service, and
                              excellent customer care.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user_2} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Michael Chen
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “Holiday Food Services has become part of our
                              daily routine. They offer healthy and flavorful
                              meals, and their consistency makes them our
                              preferred corporate caterer.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user_3} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Jennifer Martinez
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “Holiday Food Services exceeded our expectations!
                              The menu was diverse, the food was fresh, and our
                              entire team loved it. Professional service from
                              start to finish.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Sarah Johnson
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “As a company that orders lunch every day,
                              reliability is key—and Holiday Food Services
                              delivers. Great food, punctual service, and
                              excellent customer care.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user_2} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Michael Chen
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “Holiday Food Services has become part of our
                              daily routine. They offer healthy and flavorful
                              meals, and their consistency makes them our
                              preferred corporate caterer.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className={`${styles.slide_card} card poppins`}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="me-2">
                                <img src={images.user_3} alt="img" />
                              </div>
                              <div>
                                <h6
                                  className={`${styles.slide_name} fw-500 mb-1`}
                                >
                                  {" "}
                                  Jennifer Martinez
                                </h6>
                                <div className="d-flex gap-1">
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                  <FaStar style={{ color: "#FFE70F" }} />
                                </div>
                              </div>
                            </div>

                            <div>
                              <img src={images.backquote_orange} alt="img" />
                            </div>
                          </div>
                          <div className="py-3 px-3 text-center">
                            <p className={`${styles.slide_p} dark-text`}>
                              “Holiday Food Services exceeded our expectations!
                              The menu was diverse, the food was fresh, and our
                              entire team loved it. Professional service from
                              start to finish.”
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="next-btn custom-nav">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
