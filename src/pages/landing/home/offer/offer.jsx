import { useNavigate } from "react-router-dom";
import styles from "./offer.module.css";

function Offer() {
  const navigate = useNavigate();
  return (
    <section className={`${styles.service_section} container-fluid py-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                <div className={`${styles.offer_banner}`}>
                  <div className={`${styles.offer_content} poppins`}>
                    <h1>
                      Flat 15% OFF - Let's Book Your{" "}
                      <span className={styles.circle_wrap}>Event</span> Catering
                      Today
                    </h1>
                    <button
                      onClick={() => navigate("/contact-us")}
                      className={`btn ${styles.offer_btn}`}
                    >
                      Request a free quote
                    </button>
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

export default Offer;
