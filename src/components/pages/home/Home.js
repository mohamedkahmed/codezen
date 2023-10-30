import { useTranslation } from "react-i18next";
import { BsCheck2Square } from "react-icons/bs";
import "./Home.scss";
import Header from "../../layout/header/Header";
import Servies from "./services/services";
import Projects from "./projects/Projects";
import Coustomheader from "../../coustom_header/Coustomheader.jsx";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>Codezen</title>
        <meta
          name="description"
          content="Home page this home for codezen included every thing about codezen project and whor are and how we work"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* header */}

      <Header />

      {/* Home Wrapper 1 */}

      <Servies />

      {/* about us */}

      <div className="container">
        <div className="about-up">
          <Coustomheader title={t("about.about_title")} />
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="image">
                <img
                  src="../images/about-img.webp"
                  alt="about-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="text">
                <h4>{t("about.about_title_name")}</h4>
                <p>{t("about.about_text_1")}</p>
                <p>{t("about.about_text_2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}

      <Projects />

      {/* Home Wrapper 2 */}

      <section className="home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="text-section">
                <h1 className="title-section">{t("home_wrapper_2.title")}</h1>
                <p>{t("home_wrapper_2.text")}</p>
                <div className="check-section">
                  <div className="check check-one">
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_1")}</span>
                    </div>
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_2")}</span>
                    </div>
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_3")}</span>
                    </div>
                  </div>
                  <div className="check check-tow">
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_4")}</span>
                    </div>
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_5")}</span>
                    </div>
                    <div>
                      <BsCheck2Square />
                      <span>{t("home_wrapper_2.feat_6")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-6  col-md-6 col-12">
              <div className="image-section">
                <img
                  src="../images/img-home-1.webp"
                  alt="design"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
