import React from 'react'
import './About.scss'
import Member from './Member.jsx'
import BreadCrumb from '../breadCrumb/BreadCrumb.js'
import { useTranslation } from 'react-i18next'
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import { Helmet } from 'react-helmet-async'
const About = () => {
  const { t } = useTranslation();
  const data = t('about.about_our_work', { returnObjects: true })
  return (
<>
<Helmet>
  <title>About</title>
  <meta name='description'content='about codezen platform' />
  <link rel='canonical' href='/about' />
</Helmet>
<BreadCrumb title = {t("about_breadCrumb")} />
    <section className='about'>
        <div className="container">
        <Coustomheader  title = {t("about.about_title")}/>
          <div className='about-up'>
          <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="image">
                          <img src="../images/about-img.png" alt="about-img" />
                        </div>

                    
                    </div>
               <div className="col-lg-6 col-12">
                        <div className="text">
                          <h4>{t("about.about_title")}</h4>
                          <p>{t("about.about_text_1")}</p>
                          <p>{t("about.about_text_2")}</p>
                        </div>
                        
                    
                    </div>
              </div>
          </div>
          <div className="about-center">
            <div className="title-text-up">
              <h2>{t("about.about_our_work_title_1")}</h2>
              <h3>{t("about.about_our_work_title_2")}</h3>
            </div>
            <div className="row">
              {data.map((item) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={item.id}>
                    <div className="about-center-content">
                    <div className="number-box">
                   {item.id}
                    </div>
                    <div className="img-box">
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                    <div className="text-box">
                      <h3>{item.title}</h3>
                      <p>{item.dec}</p>
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
              <Member />
        </div>
    
    </section>
    </>
  )
}

export default About