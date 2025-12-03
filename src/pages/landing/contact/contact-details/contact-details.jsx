import styles from "./contact-detail.module.css";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";

function ContactDetails() {
  return (
    <>
      <section className={`${styles.detail_section} container-fluid py-5`}>
        <div className="container py-2">
          <div className="row h-100 d-flex flex-wrap align-items-stretch">
            {/* Card 1 */}
            <div className="col-lg-6 col-12 my-lg-0 my-2 d-flex">
              <div
                className={`card h-100 w-100 ${styles.contact_card} poppins h-100`}
              >
                <div className="card-body">
                  <h5>Contact Information</h5>

                  <div>
                    <h6>
                      <span className="me-2">
                        <LuPhoneCall />
                      </span>
                      Phone
                    </h6>
                    <p className="fs-14 fw-400 dark-text">
                      <li className="list-remove mb-3 d-flex align-items-start">
                        <a
                          href="tel:+919629995000"
                          className={`fs-16 fw-400  dark-text text-nowrap underline-remove ${styles.footer_link}`}
                        >
                          +91 96299 95000
                        </a>
                        <span className="mx-2 white-text">,</span>
                        <a
                          href="tel:+917397785070"
                          className={`fs-16 fw-400  dark-text text-nowrap underline-remove ${styles.footer_link}`}
                        >
                          73977 85070
                        </a>
                      </li>{" "}
                      {/* +91 96299 95000, 73977 85070 */}
                    </p>
                  </div>

                  <div className="mb-3">
                    <h6>
                      <span className="me-2">
                        <BiMailSend />
                      </span>
                      Email
                    </h6>
                    <a
                      target="_blank"
                      href="mailto:sales@holidayresidency.com"
                      className="fs-15 fw-400 dark-text underline-remove"
                    >
                      sales@holidayresidency.com
                    </a>
                  </div>

                  <div>
                    <h6>
                      <span className="me-2">
                        <HiOutlineLocationMarker />
                      </span>
                      Location
                    </h6>
                    <p className="fs-14 fw-400 dark-text">
                      346, Thudiyalur Rd, Saravanampatti, Coimbatore,
                      Tamilnadu-641035, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            {/* <div className="col-lg-4 col-12 my-lg-0 my-2 d-flex">
              <div
                className={`card h-100 w-100 ${styles.contact_card} poppins h-100`}
              >
                <div className="card-body">
                  <h5>Work Information</h5>

                  <div>
                    <h6>Monday - Friday:</h6>
                    <p className="fs-14 fw-400 dark-text">9:00 AM - 6:00 PM</p>
                  </div>

                  <div>
                    <h6>Saturday:</h6>
                    <p className="fs-14 fw-400 dark-text">10:00 AM - 4:00 PM</p>
                  </div>

                  <div>
                    <h6>
                      <span className="me-2">
                        <HiOutlineLocationMarker />
                      </span>
                      Sunday:
                    </h6>
                    <p className="fs-14 fw-400 dark-text">Closed</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Card 3 */}
            <div className="col-lg-6 col-12 my-lg-0 my-2 d-flex">
              <div
                className={`card w-100 h-100 ${styles.contact_card} poppins h-100`}
              >
                <div className="card-body">
                  <h5>Work Information</h5>

                  <div>
                    <p className="fs-14 fw-400 dark-text">
                      We typically respond to all inquiries within 24 hours
                      during business days. For urgent matters, please call us
                      directly.
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

export default ContactDetails;
