import { useNavigate } from "react-router-dom";
import styles from "./partner.module.css";

function Partner() {
  const navigate = useNavigate();
  return (
    <section className={`${styles.partner_section} container-fluid py-5`}>
      <div className="row">
        {/* topbar */}
        <div className={`col-12`}>
          <div className="container py-2">
            <div className="row">
              <div className="col-12">
                <div className={`${styles.partner_banner}`}>
                  <div className={`${styles.partner_content} poppins`}>
                    <h1 className="fs-30">Want to Partner With Us?</h1>
                    <p className="text-center fs-16">
                      Are you a Coimbatore restaurant or caterer interested in
                      joining our network? We're always looking for quality
                      partners who share our commitment to excellence.
                    </p>
                    <button
                      type="button"
                      onClick={() => navigate("/contact-us")}
                      className={`btn ${styles.partner_btn}`}
                    >
                      Get in Touch
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

export default Partner;
