import images from "../../../../constants/images";
import styles from "./banner.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

function Banner() {
  return (
    <section className={`${styles.home_section} container-fluid`}>
      <div className="row">
        {/* topbar */}
        <div className={`${styles.top_home} col-12 primary-bg poppins`}>
          <div className="container py-2">
            <div className="row ">
              <div className="col-4 d-md-block d-none">
                {" "}
                <div className="d-flex align-items-center">
                  <img src={images.location_minus} alt="img" />
                  <h6 className="fs-14 fw-500 poppins white-text mb-0 ms-2">
                    Saravanampatti
                  </h6>
                </div>
              </div>
              <div className="col-8 d-md-block d-none">
                <div className="d-flex align-items-center justify-content-end">
                  <h6 className="fs-14 fw-400 white-text mb-0 text-nowrap">
                    Office Timing - Mon to Sun: 9:00am - 6:00pm
                  </h6>
                  <div>
                    <ul
                      className={`${styles.home_ul} d-flex align-items-center ps-0 mb-0 gap-2 ms-4`}
                    >
                      <li className="li-remove">
                        <a href="#">
                          <TiSocialTwitter className="white-text fs-18" />
                        </a>
                      </li>
                      <li className="li-remove">
                        <a href="#">
                          <TiSocialFacebook className="white-text fs-18" />
                        </a>
                      </li>
                      <li className="li-remove">
                        <a href="#">
                          <TiSocialYoutube className="white-text fs-18" />
                        </a>
                      </li>
                      <li className="li-remove">
                        <a href="#">
                          <TiSocialLinkedin className="white-text fs-18" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* banner */}

        <div className="col-12">
          <div>
            <h1 className={`${styles.home_title} crimson-text text-center`}>
              Premium Food Services for Every <br />
              Celebration
            </h1>
            <p className={`${styles.home_p} fw-400 text-center my-4 poppins`}>
              From Corporate Events To Holiday Gatherings, We Bring People
              Together With Exceptional Food
            </p>

            <div className="text-center">
              <button
                className={`btn mx-2 primary-bg fs-14 fw-600 uppercase white-text py-md-3 py-2 px-md-4 px-3 poppins`}
              >
                Get a Quote
              </button>
              {/* <button
                className={`btn mx-2 white-bg fs-14 fw-600 uppercase black-text gray-outline py-3 px-4 poppins`}
              >
                Book Now
              </button> */}
              <div
                className={`${styles.banner_img_div} d-flex justify-content-center mt-5`}
              >
                <img src={images.banner_img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
