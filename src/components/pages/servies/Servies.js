import React from "react";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { useTranslation } from "react-i18next";
import "./Servies.scss";
import { BsArrowUpLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Servies = () => {
  const { t } = useTranslation();
  const data = t("servies", { returnObjects: true });
  return (
    <>
      <Helmet>
        <title>servies</title>
        <meta
          name="description"
          content="this servies page for codezen team included all servies that codezen team provied"
        />
        <link rel="canonical" href="/servies" />
      </Helmet>
      <BreadCrumb title={t("servies_breadCrumb")} />
      <section className="servies-single">
        <div className="container">
          <div className="servies-title text-center">
            <h4>{t("servies_singel_title_text")}</h4>
          </div>
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-lg-4 col-md-4 col-12" key={item.id}>
                  <div className="servies-box-content">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src={item.iconUrl}
                        alt={item.header}
                      />
                    </div>
                    <div className="title-box">
                      <h4>{item.header}</h4>
                    </div>
                    <div className="text-box">
                      <p>{item.text}</p>
                    </div>
                    <div className="svg-img-test">
                      <svg
                        loading="lazy"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        <path
                          fill="#f7723e"
                          fillOpacity="1"
                          d="M0,0L40,21.3C80,43,160,85,240,101.3C320,117,400,107,480,133.3C560,160,640,224,720,224C800,224,880,160,960,154.7C1040,149,1120,203,1200,240C1280,277,1360,299,1400,309.3L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="contact-button">
            {" "}
            <NavLink to="/contact">
              {" "}
              <span className="icon-to-go">
                {" "}
                <BsArrowUpLeft />{" "}
              </span>{" "}
              <span>{t("btn_ask_price")}</span>{" "}
            </NavLink>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servies;
