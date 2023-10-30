import React from 'react'
import erorrpage from "../images/errorPage.png"
import {Link} from "react-router-dom"
import "./erorr.scss"
const Erorrpage = () => {
  return (
    <div className='eorr-section'>
     
          <img src={erorrpage} alt="page not found" />
          <div className="content">
              <h3>Ohh!</h3>
              <p>
                  we cant seem to find page your Loking for
              </p>
              <Link className='to_home' to = "/">Back Home</Link>
          
          </div>

    </div>
  )
}

export default Erorrpage
