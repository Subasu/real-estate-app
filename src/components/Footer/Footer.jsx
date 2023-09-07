import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="flexCenter innerWidth paddings f-container">
            {/*left side*/}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120} />
                <span className='secondaryText'>
                    Our vision is  to make all people<br/>
                    the best place to live for then
                </span>
            </div>
            {/*Right side*/}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York,FL 4571,</span>
                <div className="flexCenter f-menu">
                    <span>Propertys</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer