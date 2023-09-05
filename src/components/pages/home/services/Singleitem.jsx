import React from 'react'
import './services.scss'
import Coustomheader from '../../../coustom_header/Coustomheader'
import { useTranslation } from 'react-i18next';

const Singleitem = ({services  , index}) => {
  
  const {t} = useTranslation()
    const services_index = services[index]
    const my_Expoler = services_index.explore
  
  return (
    <div className='col-8'>
    <div className="content_items">
    <h5 className='head-serv'>{services_index.header}</h5>
            <p >{services_index.text}</p>
            <div className="realt_servies">
              <h4>{t("servies_more")}</h4>

               <div className="row">
                    {
                        my_Expoler.map((item) => {
                            return (
                                <div className="col-6" key={item}>
                                        <h5 className='h5'>{item}</h5>
                                </div>
                            )
                        })
                    }
                  
                   
               </div>
            </div>
    </div>
    
    </div>
  )
}

export default Singleitem
