import React from 'react'
import "./main.css"
import Trophy from "../../img/1.png"
import Award from "../../img/2.png"
const Main = () => {
    return (
        <div className="m">
            <div className="m-left">
                <img src={Trophy} alt=""/>
            </div>
            <div className="m-right">
                <h2> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                </h2> <br />
                <div className="m-right-desc">
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </div>
                <div className="m-right-img">
                    <img src={Award} alt="" />
                </div>
                <p>
                Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                </p>

            </div>
        </div>
    )
}

export default Main
