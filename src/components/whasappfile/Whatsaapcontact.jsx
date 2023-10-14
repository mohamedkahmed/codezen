import React, { useEffect, useState } from 'react'
import "./whats.scss"
import { useGlobalContext } from '../context/context'
import {MdSend} from "react-icons/md"
import imgUser from "../pages/images/user.svg"
import imgHello from "../pages/images/hello.svg"
import { useTranslation } from 'react-i18next'
import {AiFillCloseCircle} from "react-icons/ai"
import { toast } from 'react-toastify'
import {BsWhatsapp} from "react-icons/bs"

const Whatsaapcontact = () => {
  const { massage_Apper ,  close_massage  ,massageHandelar } = useGlobalContext()
  useEffect(() => {
    setTimeout(massageHandelar, 2000); // 2 minutes = 120,000 milliseconds
  }, []);
  const { t } = useTranslation();
  const [message , setmessage] = useState("")
  const inputHandelar = (e) => {
    setmessage(e.target.value)
  }
 const form_message_Handelar = (e) => {
    e.preventDefault()
  
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '+201118459882'; // Replace with the desired phone number
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');

    setmessage("")
    toast.success("شكرا لتواصلك سيتم الرد عليك فى اسرع وقت")
 }
  return (
 <React.Fragment>
      <div className={massage_Apper ? "massage_section active_massage " : "massage_section"}>

        <div className='close_massage' onClick={ close_massage}> <AiFillCloseCircle/> </div>
        <div className="intrduce_massager">

            <div className="content_massager">

                <div className="welcom_massage">
                    {t("whatsApp_message.title_ms")}
                </div>
                <div className="name_of_respons">
                <p> {t("whatsApp_message.text_ms")} <img loading='lazy' style={{width: "15px", margin: "0 5px"}} src={imgHello} alt="" /></p>  <img src={imgUser} alt="" /> 
                </div>
                <div >
               
                 <form onSubmit={form_message_Handelar} className="massage_container" >
                
                    <input onChange={inputHandelar} value={message} required type="text"  placeholder={t("whatsApp_message.place_holder_ms")} className='input'/>
                    <button type='submit' className='btn' > <MdSend/> </button>

           
                    </form>
                </div>
            
            </div>
     
        </div>

      </div>
      <button onClick={massageHandelar} className='whats_button' type='button'> {t("ms_btn")} <BsWhatsapp/> </button>


      </React.Fragment>
  )
}

export default Whatsaapcontact