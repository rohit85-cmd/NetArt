import React from 'react'
import "./footer.css"
import Web from "../../img/web.png"
import Facebook from "../../img/facebook.png"
import Phone from "../../img/phone.png"
const Footer = () => {
    return (
        <div className="f">
            <div className="f-bg">
                <div className="f-phone logo">
                <img src={Phone} alt=""/>Toll free <b>1800 200 1234</b>
                </div>
                <div className="f-facebook logo">
                <img src={Facebook} alt=""  />www.facebook.com/cripumps
                </div>
                <div className="f-web logo">
                <img src={Web} alt="" />www.crigroups.com
                </div>
                

                
            </div>
        </div>
    )
}

export default Footer
