import React from 'react'
import './coustom.scss'
const Coustomheader = (props) => {
    const {title} = props
  return (
    <React.Fragment>
      <div className='wrapper-title'>
      <h3 className='coustom_headr'>
      {
        title
      }
     
    </h3>
    <span className='span'></span>
      </div>
    </React.Fragment>
  )
}

export default Coustomheader
