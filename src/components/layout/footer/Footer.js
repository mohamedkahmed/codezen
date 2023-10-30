import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Footer = () => {
  const { t } = useTranslation();
  const footerCenterLinks = t("footerCenterLinks", { returnObjects: true });
  const footerEndLinks = t("footerEndLinks", { returnObjects: true });
  const [loading, setloading] = useState(false);
  const [subscribe_user, setsubscribe_user] = useState({
    name: "subscribe user",
    email: "",
    message: "subscribe user",
  });
  const handel_user = (e) => {
    setsubscribe_user({ ...subscribe_user, [e.target.id]: e.target.value });
  };
  const form_submit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await emailjs.send(
        "service_xcr9kal",
        "template_8392w2u",
        subscribe_user,
        "MvvmMcHoZ4pfShaNN"
      );
      setsubscribe_user({
        name: "",
        email: "",
        message: "",
      });
      setloading(false);
      toast.success("the best offers in your box");
    } catch (error) {
      setloading(false);
      toast.error("there is an erorr check your internet and try again");
    }
  };
  return (
    <>
      <footer
        className="footer-upper"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="sign d-flex align-items-center text-white">
                <img
                  loading="lazy"
                  src="../images/newsletter.png"
                  alt="newsletter"
                />
                <p>{t("footer_upper.best_inbox")}</p>
              </div>
            </div>
            <div className=" col-lg-7 col-md-6 col-12">
              <div className="Sub-email">
                <form onSubmit={form_submit} className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("footer_upper.place_holder")}
                    aria-label="Your Email"
                    aria-describedby="basic-addon2"
                    required
                    id="email"
                    name="email"
                    value={subscribe_user.email}
                    onChange={handel_user}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="input-group-text"
                      id="basic-addon2"
                    >
                      {loading
                        ? t("footer_upper.Subscribe2")
                        : t("footer_upper.Subscribe")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        className="footer-center"
        style={{ borderBottom: "1px solid #3b4149" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6">
              <div className="txt-footer-center">
                <div className="footer-center-links">
                  <div className="img-logo-footer">
                    <img src="../images/15.webp" alt="logo" loading="lazy" />
                  </div>
                  <div className="social_icons">
                    <ul className="wrapper">
                      <Link
                        to={
                          "https://www.facebook.com/profile.php?id=61551068038358&mibextid=LQQJ4d"
                        }
                        className="icon facebook"
                      >
                        <span className="tooltip">Facebook</span>
                        <span>
                          {" "}
                          <BsFacebook />{" "}
                        </span>
                      </Link>

                      <Link
                        to={
                          "https://instagram.com/codezen92?igshid=MzRlODBiNWFlZA=="
                        }
                        className="icon instagram"
                      >
                        <span className="tooltip">Instagram</span>
                        <span>
                          {" "}
                          <BsInstagram />{" "}
                        </span>
                      </Link>
                      <Link className="icon github">
                        <span className="tooltip">Github</span>
                        <span>
                          {" "}
                          <BsGithub />{" "}
                        </span>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4>{t("footer_center.head_1")}</h4>
                <div className="footer-center-links">
                  <address
                    style={{
                      color: "#dadada",
                      fontSize: "14px",
                      marginBottom: "5px",
                    }}
                  >
                    <ImLocation style={{ margin: "0 3px" }} />{" "}
                    {t("footer_center.address")}
                  </address>
                  <a className="bages_links" href="tel: +201118459882">
                    {" "}
                    <BsFillTelephoneFill style={{ margin: "0 3px" }} />
                    {t("footer_center.phone")}
                  </a>
                  <a
                    className="bages_links"
                    style={{ textTransform: "lowercase" }}
                    href="mailto: codezen92@gmail.com"
                  >
                    <FaEnvelope style={{ margin: "0 3px" }} />{" "}
                    {t("footer_center.mail")}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4>{t("footer_center.head_2")}</h4>
                <div className="footer-center-links">
                  {footerCenterLinks.map((item) => {
                    return (
                      <Link
                        className="bages_links"
                        key={item.id}
                        to={item.href}
                      >
                        {" "}
                        {item.text}{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6">
              <div className="txt-footer-center">
                <h4>{t("footer_center.head_3")}</h4>
                <div className="footer-center-links">
                  {footerEndLinks.map((item) => {
                    return (
                      <Link
                        className="bages_links"
                        key={item.id}
                        to={item.href}
                      >
                        {" "}
                        {item.text}{" "}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="txt-co">
                <p style={{ textTransform: "capitalize" }}>
                  &copy; {t("footer_copy")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
