import React from "react";
import "./contact.scss";
import contact from "../images/contact.png";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import Coustomheader from  "../../coustom_header/Coustomheader.jsx"
import { Helmet } from "react-helmet-async";
const Contact = () => {
  const { t } = useTranslation();

  const [customer_data, setcustomer_data] = useState(
    {
    
    name: "",
    email: "",
    phone: "",
    message: "" // Corrected key from "massage" to "message"
  }
  );
  const navgaion = useNavigate()
  const issubmiting = navgaion.state === "submiting"
  const inputHandelar = (e) => {
    const id = e.target.id
    const value = e.target.value
    setcustomer_data({...customer_data,[id]:value})
   
  }
 const handelFormsubmit = (e) => {
  e.preventDefault()

  try {
   
    emailjs.send("service_xcr9kal","template_8392w2u" , customer_data , "MvvmMcHoZ4pfShaNN");
    setcustomer_data(
      {
        name: "",
        email: "",
        phone: "",
        message: "" // Corrected key from "massage" to "message"
      }
    
    
    )
   
 
    toast.success("thanks for Your Message")
    return navgaion("/") 
   
  } catch (error) {
 
  return  toast.error(error)
  }

 }

  return (
    <React.Fragment>
      <Helmet>
              <title>Contact</title>
              <meta name='description'content='Contact all contact method to codezen feel free to contact with us for any project you need' />
              <link rel='canonical' href='/contact' />
      </Helmet>
      <BreadCrumb title={t("contact_breadCrumb")} />
      <div className="contact">
<Coustomheader title ={t("contact-us")} />
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-12">
                <div className="maps">
                <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65751.6146656632!2d31.22781275080028!3d29.989671898520328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1693921746709!5m2!1sar!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
                </div>
              </div>
            <div className="col-lg-6 col-12">
              <div className="content">
                <p> {t("contact.contact_title")} </p>
                <form onSubmit={handelFormsubmit}>
                  <div className="input_section">
                    <label className="lable" htmlFor="name">
                    {t("contact.la_name")}*
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={inputHandelar}
                      value={customer_data.name}
                      id="name"
                      placeholder={t("contact.la_name")}
                      required
                    />
                  
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="phone">
                    {t("contact.la_phone")}*
                    </label>
                    <input
                      type="text"
                      name="phone"
                      onChange={inputHandelar}
                      value={customer_data.phone}
                      id="phone"
                      placeholder={t("contact.la_phone")}
                      required
                    />
                  </div>
                  <div className="input_section">
                    <label className="lable" htmlFor="email">
                    {t("contact.la_email")}*
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={inputHandelar}
                      value={customer_data.email}
                      id="email"
                      placeholder={t("contact.la_email")}
                      required
                    />
                  </div>

                  <div className="input_section">
                    <label className="lable" htmlFor="massage">
                    {t("contact.la_massage")}
                    </label>
                    <textarea
                      className="massage"
                      name="message"
                      onChange={inputHandelar}
                      id="message"
                      value={customer_data.message}
                    
                    ></textarea>
                  </div>
                  <button type="submit">  {t("contact.submit")}</button>
                </form>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
