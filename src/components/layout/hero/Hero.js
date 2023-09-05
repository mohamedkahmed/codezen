import { useTranslation } from "react-i18next";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Fade = () => {
  const {t} = useTranslation();
  return (
    <div className="waveWrapper waveAnimation">
    <div className="container">
    <div id='title'>
    <div className="row">
        <div className="col-lg-6 col-12">
            <div className="text-title">
              <p>{t('hero_title')} <span> {t('hero_title_span')} </span></p>
              <div>
              <Link className="bages_links" to ="contact">{t('contact_us')}</Link>
              <Link className="bages_links" to ="about">{t('who_we_are')}</Link>
              </div>
            </div>
        
        </div>
        <div className="col-lg-6 col-12">
              <div className="ava-img">
                <img src="../images/icon-hero.png" alt="hero img" />
            </div>
        </div>
    </div>
</div>
    
    </div>

</div>
  )
}

export default Fade