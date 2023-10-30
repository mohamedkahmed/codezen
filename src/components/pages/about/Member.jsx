import React from 'react'
import { useTranslation } from 'react-i18next'
import './About.scss'


import Coustomheader from '../../coustom_header/Coustomheader'

 
const Member = () => {
  
  const {t} =useTranslation();
  const teamData = t("team_staff" , {returnObjects: true})
   
  
  
  return (
    <div className='meber'>
                <div >
                            <Coustomheader title = {t("provile_header")} />
            
                    
                    <p className="content-center">
                            {
                                    t("provile_header_text")
                            }
                    </p>
                </div>
                <div className="member_rapper">
                <div className="row">
                {
                  teamData.map((meber) => {
                    return (
                              <div className="col-lg-4 col-md-6 col-12" key={meber.id}>
                                  <div className="card_meber">
                                          <div className="image_meber">
                                          <img src={meber.image} alt={meber.name} />
                                                
                                          </div>
                                          <h4>{meber.name}</h4>
                                          <p className='jop'>{meber.jop_type} </p>
                                          <p className='subtitle'>{meber.subtitle}</p>
                                          <hr />
                                  </div>
                              
                              </div>
                    )
                  })
                }
                    
                    </div> 
                </div>
           
  
    
            
  </div>



  )
}

export default Member